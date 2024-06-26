import { gql } from "@apollo/client";

export const LOGIN_QUERY = gql`
    query Login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            id
        }
    }
`;
