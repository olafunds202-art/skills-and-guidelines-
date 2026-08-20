# Stack Pack: Google Apps Script

## Use when

- the project automates Google Sheets, Docs, Drive, Gmail, Calendar, Forms, or Apps Script web apps
- work touches triggers, spreadsheet logic, document generation, or workflow automation

## Working rules

- be mindful of Apps Script quotas and execution time limits
- batch reads and writes instead of cell-by-cell operations
- isolate business logic from Google service calls where practical
- treat triggers and multi-user edits as concurrency-sensitive
- store configuration in PropertiesService when appropriate

## Common workflow

1. inspect the bound or standalone script structure
2. identify triggers, entry points, and service dependencies
3. reduce API calls and batch operations
4. test against representative sheets/docs data
5. verify trigger behavior and failure handling

## Verification checklist

- entry-point functions are clear
- quota-heavy loops are optimized
- trigger-safe logic is idempotent where possible
- logs are useful without exposing sensitive data
- user-facing sheet/doc formatting remains correct

## Common pitfalls

- per-cell read/write loops causing slow execution
- missing LockService where concurrent edits matter
- secrets or config hardcoded in script files
- fragile assumptions about sheet names or ranges
- no error recovery for trigger-driven workflows

## Security focus

- use least-privilege scopes
- keep secrets in PropertiesService or external secret storage where appropriate
- validate external input to web apps and form handlers
- be careful with email, Drive, and document sharing automation
