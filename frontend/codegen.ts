import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
    schema: 'http://localhost:8000/graphql',
    documents: ['src/graphql/**/*.ts'],
    ignoreNoDocuments: true, // for better experience with the watcher
    generates: {
        './src/gql/': {
            preset: 'client',
            plugins: [
                {
                    typescript: {},
                    'typescript-operations': {},
                    'typescript-react-apollo': {},
                },
            ],
            config: {
                withHooks: true,
                withHOC: false,
                withComponent: false,
            },
        },
    },
    config: {
        apolloClientVersion: 3, // Đảm bảo sử dụng Apollo Client phiên bản 3
    },
};

export default config;
