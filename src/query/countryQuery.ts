import { gql } from 'graphql-tag';

import { CONTINENT_FRAGMENT } from './continentQuery';
import { LANGUAGE_FRAGMENT } from './languageFragment';

export const COUNTRY_FRAGMENT = gql`
    ${LANGUAGE_FRAGMENT}

    fragment CountryFragment on Country {
        name
        languages {
            ...LanguageFragment
        }
    }
`;

export const COUNTRIES_QUERY = gql`
    ${CONTINENT_FRAGMENT}
    ${LANGUAGE_FRAGMENT}

    query Countries {
        countries {
            name
            continent {
                ...ContinentFragment
            }
            languages {
                ...LanguageFragment
            }
        }
    }
`;
