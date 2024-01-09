'use client';

import { ApolloNextAppProvider } from '@apollo/experimental-nextjs-app-support/ssr';
import React, { PropsWithChildren } from 'react';
import { client } from './utils/apollo-client';
import { loadErrorMessages, loadDevMessages } from '@apollo/client/dev';

if (process.env.NODE_ENV !== 'production') {
    loadDevMessages();
    loadErrorMessages();
}

export function ApolloWrapper({ children }: PropsWithChildren<{}>): JSX.Element {
    return <ApolloNextAppProvider makeClient={client}>{children}</ApolloNextAppProvider>;
}
