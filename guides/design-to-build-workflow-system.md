# Design-to-build workflow system

## Purpose

This guide defines how to turn design references, screenshots, mockups, or rough UI direction into a consistent implementation workflow.

## What this system covers

- design intake
- reference analysis
- UI scoping and component mapping
- implementation planning
- review and polish loops

## Core principle

A design handoff is not just "make it look like this." It should answer:

- what the reference is showing
- what matters visually vs structurally
- what components and states are required
- what quality bar will be used for review

## Recommended documents

- `docs/DESIGN_BRIEF.md`
- `docs/UI_COMPONENT_MAP.md`
- `docs/UI_REVIEW_CHECKLIST.md`
- `docs/DESIGN_DECISIONS.md`

## Suggested lifecycle

### 1. Intake
Capture references, goals, constraints, and target screens or flows.

### 2. Analysis
Break the design into layout, hierarchy, interactions, states, tokens, and reusable components.

### 3. Build planning
Map references to implementation slices, components, and review checkpoints.

### 4. Implementation
Build with consistency across screen families, states, spacing, and responsiveness.

### 5. Review and polish
Compare against the reference, note differences intentionally, and refine what matters most first.

## Guardrails

- do not guess hidden states if they can be clarified
- separate visual polish issues from functional issues
- keep reusable component mapping visible
- when full visual review is not possible, state the limitation clearly
