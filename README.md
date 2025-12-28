# graphql-codegen-example

Example project for GraphQL Code Generator.

## Prerequisites

- Node.js (v20+)
- pnpm

## Installation

```bash
pnpm install
```

## Available Scripts

- `pnpm run codegen`: Generates GraphQL types based on the configuration and queries.
- `pnpm run lint`: Lint the codebase using `oxlint`.
- `pnpm run format`: Format the codebase using `oxfmt`.
- `pnpm run update`: Update all dependencies.

## Project Structure

- `src/query`: Contains GraphQL operations and fragments.
- `src/generated`: Destination for generated TypeScript types.
- `codegen.ts`: Configuration file for GraphQL Code Generator.

## Usage

This project is configured to generate TypeScript types from GraphQL operations.

1.  **Add Queries**: Add your GraphQL queries or fragments in `src/query`.
2.  **Generate Types**: Run `pnpm run codegen` to generate the corresponding TypeScript types in `src/generated`.

## Tech Stack

- [TypeScript](https://www.typescriptlang.org/)
- [GraphQL Code Generator](https://the-guild.dev/graphql/codegen)
- [Oxlint](https://oxc-project.github.io/docs/guide/usage/linter.html)
- [Oxfmt](https://github.com/oxc-project/oxfmt)
