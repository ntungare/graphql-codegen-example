import { gql } from "graphql-tag";

export const LANGUAGE_FRAGMENT = gql`
    fragment LanguageFragment on Language {
        name
    }
`;
