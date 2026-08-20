# Stack Pack: Prisma ORM

## Use when

- the project uses Prisma for schema, migrations, and data access
- work touches models, relations, queries, or generated client behavior

## Working rules

- treat schema changes as product changes, not just code edits
- understand relation and nullability impacts before migrating
- keep query shape explicit and avoid overfetching
- verify transaction boundaries for multi-step writes
- update types, seeds, and tests when the data model changes

## Common workflow

1. inspect the current schema and affected models
2. define the query or migration change
3. update service logic and validations with the schema change
4. verify generated client assumptions
5. run migration and test checks

## Verification commands

Typical commands:

- `npx prisma format`
- `npx prisma validate`
- `npx prisma migrate dev --create-only`
- `npm test`

## Common pitfalls

- schema change without rollout thinking
- hidden N+1 patterns in service code
- assuming optional relations are always present
- weak transaction handling in money or inventory flows
- test data not matching schema evolution

## Security focus

- review sensitive model exposure
- validate all IDs and relation ownership
- keep privileged queries on the server only
- review migration impact on existing data
