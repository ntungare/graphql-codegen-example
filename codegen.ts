import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
    require: ["ts-node/register"],
    generates: {
        "src/generated/": {
            schema: "https://countries.trevorblades.com/",
            documents: "src/query/**/*.ts",
            plugins: [],
            preset: "gql-tag-operations-preset",
            presetConfig: {
                augmentedModuleName: "graphql-tag",
            },
            hooks: {
                afterOneFileWrite: ["npx prettier --write"],
            },
            config: {
                dedupeFragments: true,
                dedupeOperationSuffix: true,
                exportFragmentSpreadSubTypes: true,
            },
        },
    },
};

export default config;
