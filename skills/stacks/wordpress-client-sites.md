# Stack Pack: WordPress Client Sites

## Use when

- building or maintaining WordPress sites for clients
- work touches themes, plugins, content models, forms, SEO, or deployment/handoff

## Working rules

- clarify whether the site is classic theme, block theme, builder-based, or headless
- minimize plugin sprawl and document why each plugin exists
- treat client editing experience as a first-class requirement
- plan backup and rollback before risky updates

## Common workflow

1. inspect theme/plugin architecture and hosting constraints
2. identify content model, reusable blocks, and admin/editor needs
3. implement the smallest change that preserves maintainability
4. verify front-end rendering, admin editing, forms, and SEO behavior
5. document plugin, hosting, and handoff notes

## Common pitfalls

- plugin overlap and dependency confusion
- direct theme edits without child-theme or update strategy
- poor editor experience for non-technical clients
- untracked hosting/configuration assumptions
- security hardening ignored on small sites

## Security focus

- keep WordPress core/plugins updated
- use least-privilege admin/editor roles
- protect forms and uploads
- review caching, backups, and security plugins rationally
