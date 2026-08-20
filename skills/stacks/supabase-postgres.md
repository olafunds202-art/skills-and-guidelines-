# Stack Pack: Supabase + PostgreSQL

## Use when

- Supabase or PostgreSQL is central to the app
- work touches schema, policies, queries, or auth-linked data access

## Working rules

- treat schema and policy changes as high-risk
- check query correctness and performance
- define how application code relies on database guarantees
- document migrations and rollback considerations

## Database safety checklist

- row-level security reviewed where applicable
- queries use safe construction
- indexes considered for new access patterns
- destructive migrations planned carefully
- backfill strategy considered for data-shape changes

## Common workflow

1. inspect current schema and policies
2. define migration or query change
3. define application impact
4. test with representative data
5. verify policy behavior and failure cases

## Common pitfalls

- missing or broken RLS
- assuming nullability incorrectly
- unindexed filters on large tables
- application logic relying on implicit DB behavior
- schema change without rollout/rollback thinking

## Security focus

- least privilege
- RLS where needed
- no service-role key leakage
- careful logging around user data
- auth-linked access rules tested explicitly
