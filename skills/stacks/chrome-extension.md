# Stack Pack: Chrome Extension (Manifest V3)

## Use when

- the project is a Chrome or Chromium extension
- work touches manifest permissions, content scripts, service workers, popup UI, options pages, or message passing

## Working rules

- treat permissions as part of the product surface, not a small detail
- minimize requested permissions
- understand the boundary between content script, background/service worker, and extension UI
- prefer explicit message contracts between extension parts
- avoid fragile DOM assumptions on third-party pages

## Common workflow

1. inspect the manifest and current permission model
2. identify which execution context is affected
3. implement the smallest permission and script change needed
4. test messaging, storage, and target-page behavior
5. verify packaging and runtime behavior

## Verification commands

Typical checks:

- validate `manifest.json`
- run the project build if bundling is used
- load unpacked extension in Chrome
- test popup, options, service worker, and content-script flows

## Common pitfalls

- overbroad host permissions
- assuming persistent background state in MV3
- content scripts breaking on dynamic pages
- insecure storage of tokens or user data
- race conditions in message passing

## Security focus

- least-privilege permissions
- no unsafe eval patterns
- sanitize user-controlled content before rendering in extension UI
- protect secrets and review what is stored in sync/local storage
- be explicit about data collection and external requests
