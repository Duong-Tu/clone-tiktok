import {
  ApolloClient,
  ApolloLink,
  InMemoryCache,
  NormalizedCacheObject,
  Observable,
  gql,
} from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import { createUploadLink } from 'apollo-upload-client';
async function refreshToken(client: ApolloClient<NormalizedCacheObject>) {
  try {
    const { data } = await client.mutate({
      mutation: gql`
        mutation RefreshToken {
          accessToken
        }
      `,
    });
    const newAccessToken = data?.refreshToken;
    if (!newAccessToken) {
      throw new Error('New access token not provided.');
    }
    localStorage.setItem('accessToken', newAccessToken);
    return `Bearer ${newAccessToken}`;
  } catch (error) {
    throw new Error('Error getting new access token');
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
          refreshToken(client)
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

const uploadLink = createUploadLink({
  uri: 'http://localhost:3000/graphql',
  credentials: 'include',
  headers: {
    'apollo-require-preflight': 'true',
  },
});

export const client = new ApolloClient({
  uri: 'http://localhost:8000',
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          gteCommentByPostId: {
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
    'content-type': 'application/json',
  },
  link: ApolloLink.from([errorLink, uploadLink]),
});
