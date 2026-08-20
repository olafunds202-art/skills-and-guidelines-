# Stack Pack: Firebase for Web and Mobile

## Use when

- the project relies on Firebase Auth, Firestore, Storage, Functions, Hosting, or Messaging
- work touches client apps plus Firebase-backed infrastructure

## Working rules

- understand client vs server trust boundaries before editing
- treat security rules as part of the application, not an afterthought
- keep data shape assumptions explicit across clients and functions
- avoid overloading one collection or document path with unrelated concerns
- design for offline, retry, and sync behavior where relevant

## Common workflow

1. inspect Firebase services in use and current rules
2. identify affected collections, functions, auth flows, or storage paths
3. update code and rules coherently
4. verify local emulator or representative environment behavior
5. test failure and permission cases

## Verification checklist

- auth rules reviewed
- Firestore/Storage rules reviewed
- client assumptions match server-side enforcement
- indexes considered for query changes
- function triggers and idempotency checked

## Common pitfalls

- trusting client-side checks without rules
- expensive Firestore reads from weak query design
- missing indexes
- function loops caused by trigger writes
- weak local emulator coverage

## Security focus

- least-privilege rules
- no service credentials in client bundles
- explicit auth checks in callable/admin functions
- careful logging around user data
