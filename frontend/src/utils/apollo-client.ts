import {
    ApolloClient,
    ApolloLink,
    HttpLink,
    NormalizedCacheObject,
    Observable,
    gql,
} from '@apollo/client';
import {
    NextSSRApolloClient,
    NextSSRInMemoryCache,
} from '@apollo/experimental-nextjs-app-support/ssr';
import { onError } from '@apollo/client/link/error';

export async function refreshToken(client: ApolloClient<NormalizedCacheObject>) {
    try {
        const { data } = await client.mutate({
            mutation: gql`
                mutation RefreshToken {
                    refreshToken
                }
            `,
        });
        const newAccessToken = data?.refreshToken;
        console.log('newAccessToken', newAccessToken);
        if (!newAccessToken) {
            throw new Error('New access token not received.');
        }
        localStorage.setItem('accessToken', newAccessToken);
        return `Bearer ${newAccessToken}`;
    } catch (err) {
        console.log(err);
        throw new Error('Error getting new access token.');
    }
}

let retryCount = 0;
const maxRetry = 3;

const errorLink = onError(({ graphQLErrors, operation, forward }) => {
    const operationName = operation.operationName;
    console.log(operationName, 'operationName');

    if (graphQLErrors) {
        for (const err of graphQLErrors) {
            if (err.extensions.code === 'UNAUTHENTICATED' && retryCount < maxRetry) {
                retryCount++;

                return new Observable((observer) => {
                    refreshToken(makeClient())
                        .then((token) => {
                            console.log('token', token);
                            operation.setContext((previousContext: any) => ({
                                headers: {
                                    ...previousContext.headers,
                                    authorization: token,
                                },
                            }));
                            const forward$ = forward(operation);
                            forward$.subscribe(observer);
                        })
                        .catch((error) => observer.error(error));
                });
            }
        }
    }
});

const uploadLink = new HttpLink({
    uri: 'http://localhost:8000/graphql',
    credentials: 'include',
    headers: {
        'apollo-require-preflight': 'true',
    },
});

export function makeClient() {
    return new NextSSRApolloClient({
        cache: new NextSSRInMemoryCache({
            typePolicies: {
                Query: {
                    fields: {
                        getCommentsByPostId: {
                            merge(existing, incoming) {
                                return incoming;
                            },
                        },
                    },
                },
            },
        }),
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
        },
        link: ApolloLink.from([errorLink, uploadLink]),
    });
}
