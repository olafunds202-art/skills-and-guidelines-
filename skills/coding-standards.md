# Skill: Coding Standards

## Purpose

Use this skill as the default quality baseline for all code edits.

## Core principles

- readability first
- keep it simple
- avoid repetition
- do not build speculative abstractions
- follow existing project conventions unless they are clearly harmful

## Naming

- variables should communicate meaning
- functions should describe actions or checks
- avoid vague placeholders like `data`, `tmp`, `x`, or `flag` unless the scope is tiny and obvious

## Structure

- prefer small focused files
- prefer small focused functions
- extract duplicated logic
- avoid deep nesting; use early returns where helpful

## State and data

- prefer immutable updates
- use explicit types where helpful
- avoid `any` unless truly unavoidable and clearly justified

## Error handling

- handle failures intentionally
- keep user-facing errors safe and useful
- keep sensitive details out of external responses
- do not leave debug logging behind unless required and appropriate

## Validation

- validate input at boundaries
- prefer schema validation or centralized checks
- whitelist allowed values rather than trying to blacklist bad ones

## Documentation

- comment to explain why or trade-offs
- document public APIs and non-obvious behavior
- update docs when behavior changes

## Code smell checklist

- function too long
- file too large or doing too much
- deep nesting
- duplicated logic
- magic numbers
- inconsistent naming
- silent failure paths
