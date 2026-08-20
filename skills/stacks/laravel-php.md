# Stack Pack: Laravel + PHP

## Use when

- the project is a Laravel application
- work touches routes, controllers, requests, Eloquent models, migrations, queues, or Blade views

## Working rules

- use Form Requests or equivalent validation boundaries consistently
- keep controllers focused and move business logic into services/actions where practical
- treat migrations and queue behavior as high-impact changes
- understand policy/gate usage before touching auth-sensitive code

## Common workflow

1. inspect routes, controllers, models, policies, and migrations
2. identify whether the change is validation, persistence, or UI focused
3. update validation, model behavior, and controller/service logic together
4. verify policies, queue jobs, and event behavior where relevant
5. run tests and migration checks

## Verification commands

Typical commands:

- `php artisan test`
- `php artisan migrate --pretend`
- `php artisan route:list`

## Common pitfalls

- fat controllers
- hidden model side effects
- policy gaps
- migration rollback not considered
- queue jobs assuming request-time state

## Security focus

- validate requests
- review policies/gates
- protect secrets in config/env
- sanitize and escape user-controlled output appropriately
