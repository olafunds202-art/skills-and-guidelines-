# Stack Pack: Django + Python

## Use when

- the project is a Django app or platform
- work touches models, views, serializers, admin, templates, forms, or background jobs

## Working rules

- understand whether the project uses classic Django views, DRF, or both
- keep business logic out of bloated views where practical
- treat migrations as review-worthy changes
- be explicit about auth, permissions, and queryset filtering
- test model, form, serializer, and view behavior separately when useful

## Common workflow

1. inspect apps, settings, URLs, and model boundaries
2. identify whether the change is model, service, view, template, or admin-focused
3. implement the smallest coherent change across models, forms/serializers, and views
4. verify permissions, validation, and query behavior
5. run tests and migration checks

## Verification commands

Typical commands:

- `python manage.py makemigrations --check --dry-run`
- `python manage.py test`
- `ruff check .`
- `pyright .`

## Common pitfalls

- fat views and duplicated form/serializer logic
- N+1 queries from missing `select_related` or `prefetch_related`
- weak permission checks in views or APIs
- accidental migration drift
- business rules hidden inside templates or signals

## Security focus

- validate and sanitize form/API input
- check object-level permissions
- protect admin and staff-only paths
- review CSRF, session, and secret settings
