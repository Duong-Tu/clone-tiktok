'use client';

import { ApolloLink, HttpLink } from '@apollo/client';
import {
    ApolloNextAppProvider,
    NextSSRApolloClient,
    NextSSRInMemoryCache,
    SSRMultipartLink,
} from '@apollo/experimental-nextjs-app-support/ssr';
import React, { PropsWithChildren } from 'react';

function client() {
    const httpLink = new HttpLink({
        uri: 'http://localhost:3000/graphql',
    });

    return new NextSSRApolloClient({
        cache: new NextSSRInMemoryCache(),
        link:
            typeof window === 'undefined'
                ? ApolloLink.from([
                      new SSRMultipartLink({
                          stripDefer: true,
                      }),
                      httpLink,
                  ])
                : httpLink,
    });
}
export function ApolloWrapper({ children }: PropsWithChildren<{}>): JSX.Element {
    return <ApolloNextAppProvider makeClient={client}>{children}</ApolloNextAppProvider>;
}
