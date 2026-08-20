# Stack Pack: Electron Desktop Apps

## Use when

- the project is an Electron app
- work touches main process, renderer, preload scripts, IPC, packaging, or auto-update flows

## Working rules

- understand the boundary between main, preload, and renderer before editing
- prefer secure preload APIs over exposing Node directly to renderer code
- keep IPC contracts explicit and minimal
- test platform-specific behavior where relevant
- treat packaging and update logic as deployment-sensitive areas

## Common workflow

1. inspect process boundaries and current IPC model
2. identify whether the change is renderer UI, main process, or preload exposure
3. update IPC contracts and validation coherently
4. verify local packaging/runtime behavior
5. test permissions, file access, and update-related flows

## Common pitfalls

- exposing too much power to renderer code
- brittle IPC with no validation
- platform-specific path or permission assumptions
- packaging surprises late in the release cycle
- secrets stored insecurely on disk

## Security focus

- context isolation enabled where practical
- validate IPC inputs
- least privilege for exposed APIs
- careful file-system and shell invocation handling
