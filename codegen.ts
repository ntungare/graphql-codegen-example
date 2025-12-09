import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
    require: ['ts-node/register'],
    generates: {
        'src/generated/': {
            schema: 'https://countries.trevorblades.com/',
            documents: 'src/query/**/*.ts',
            preset: 'client-preset',
            plugins: [
                {
                    add: {
                        content: '/* oxlint-disable */',
                    },
                },
            ],
            presetConfig: {
                augmentedModuleName: 'graphql-tag',
            },
        },
    },
};

export default config;
