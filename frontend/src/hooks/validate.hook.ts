import { ApolloError } from '@apollo/client/errors';
import { useState, useCallback } from 'react';

interface GraphQLErrorHandlerHook {
    errors: Record<string, string>;
    handleGraphQLError: (error: ApolloError) => void;
    clearErrors: () => void;
}

export const useGraphQLErrorHandler = (): GraphQLErrorHandlerHook => {
    const [errors, setErrors] = useState<Record<string, string>>({});

    const handleGraphQLError = useCallback((error: ApolloError) => {
        const allErrors: Record<string, string> = {};
        if (error) {
            if (error.graphQLErrors && error.graphQLErrors.length > 0) {
                error.graphQLErrors.forEach((graphQLError: any) => {
                    const extensions = graphQLError.extensions;
                    Object.keys(extensions).forEach((key) => {
                        allErrors[key] = extensions[key];
                    });
                });
            }
        }
        setErrors(allErrors);
    }, []);

    const clearErrors = useCallback(() => {
        setErrors({});
    }, []);

    return { errors, handleGraphQLError, clearErrors };
};
