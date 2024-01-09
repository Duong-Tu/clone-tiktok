import { gql } from '@apollo/client';

export const GET_USERS = gql`
    query GetUsers {
        getUsers {
            id
            fullname
            email
            image
        }
    }
`;

export const CHECK_USER_LOGGED_IN = gql`
    query checkUserLoggedIn {
        checkUserLoggedIn
    }
`;
