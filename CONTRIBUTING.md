# Contributing

Thanks for contributing to Skills and Guidelines.

This repo is meant to be a practical, reusable, Arena-friendly library of agent operating guides and software delivery skills.

## Contribution goals

Good contributions usually improve one or more of these:

- clarity
- portability across projects
- safer execution guardrails
- stronger verification discipline
- better stack-specific guidance
- better templates for planning, review, and documentation

## Principles

1. Prefer reusable guidance over one-off project advice.
2. Keep Arena-native behavior at the center.
3. Do not reintroduce Claude-only runtime assumptions as hard dependencies.
4. Keep examples realistic and implementation-oriented.
5. Favor small, reviewable pull requests.

## Good contribution types

- new skill packs
- stack-specific packs
- stronger security checklists
- CI templates
- issue/PR templates
- implementation plan templates
- ADR templates
- decision log patterns
- docs that help agents and humans collaborate better

## Avoid

- tool- or vendor-specific lock-in unless clearly marked optional
- giant opinionated rewrites without rationale
- advice that cannot be verified in practice
- copying external repos verbatim without adaptation

## Suggested workflow

1. Open an issue first for large changes.
2. Keep changes focused.
3. Update docs when behavior or structure changes.
4. Add or update templates if the contribution changes how work should be done.
5. If you add a stack pack, include:
   - when to use it
   - assumptions
   - workflow guidance
   - verification guidance
   - common pitfalls

## Pull request checklist

- [ ] The change is Arena-compatible
- [ ] The docs are clear and consistent
- [ ] No broken internal links or missing referenced files
- [ ] New skills/templates are listed in the README where appropriate
- [ ] CI/template examples still make sense

## Style

- Use plain markdown.
- Prefer short sections with concrete bullets.
- Explain why a rule exists, not only what it says.
- Keep examples small and easy to adapt.
