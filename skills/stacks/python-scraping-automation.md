# Stack Pack: Python Scraping and Automation

## Use when

- the project scrapes websites, automates browsers, or runs scheduled extraction/processing jobs
- work involves requests, BeautifulSoup, Playwright, Selenium, job orchestration, or data cleanup

## Working rules

- design for retries, partial failure, and observability
- separate fetch, parse, normalize, and persist steps
- assume target sites may change markup or rate-limit requests
- make idempotency a goal for scheduled jobs
- document assumptions about selectors and sources

## Common workflow

1. inspect the target sources and extraction pipeline
2. isolate selectors/parsers from transport code
3. add robust error handling and retries
4. test parsing against saved fixtures where possible
5. verify scheduling, output shape, and duplicate handling

## Verification commands

Typical commands:

- `ruff check .`
- `pyright .`
- `pytest`
- dry-run job execution against sample input

## Common pitfalls

- brittle CSS/XPath selectors
- no backoff or retry behavior
- duplicate records from non-idempotent runs
- no timeout handling
- no fixture-based parser tests
- hidden anti-bot failure modes

## Security and compliance focus

- never hardcode credentials or cookies
- protect proxies and API keys
- review legal and policy constraints for target sites
- sanitize and validate exported data before downstream use
- avoid logging secrets or personal data unnecessarily
