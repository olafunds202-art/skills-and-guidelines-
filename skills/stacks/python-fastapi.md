# Stack Pack: Python + FastAPI

## Use when

- the project is a FastAPI backend or service
- work touches routes, Pydantic models, dependencies, background tasks, or async data flows

## Working rules

- validate request and response shapes with models
- keep route handlers thin and move business logic into services
- understand which dependencies are sync vs async before changing code
- centralize error handling where practical
- test auth, validation, and failure paths explicitly

## Common workflow

1. inspect routers, models, dependencies, and services
2. update schemas and handlers together
3. verify async boundaries and blocking calls
4. add or update tests for success and failure cases
5. run lint/type/tests

## Verification commands

Typical commands:

- `python -m pip install -r requirements.txt`
- `ruff check .`
- `pyright .`
- `pytest`

## Common pitfalls

- blocking I/O inside async routes
- weak validation or inconsistent response models
- auth checks scattered across handlers
- direct DB logic inside route functions
- silent exception swallowing

## Security focus

- validate body, params, and query input
- protect secrets in environment config
- verify authz on sensitive routes
- rate limit exposed endpoints when needed
- sanitize logs and error responses
