import { gql } from "graphql-tag";

import { COUNTRY_FRAGMENT } from "./countryQuery";

export const CONTINENT_FRAGMENT = gql`
    ${COUNTRY_FRAGMENT}

    fragment ContinentFragment on Continent {
        name
        countries {
            ...CountryFragment
        }
    }
`;

export const CONTINENTS_QUERY = gql`
    ${CONTINENT_FRAGMENT}

    query Continents {
        continents {
            ...ContinentFragment
        }
    }
`;
