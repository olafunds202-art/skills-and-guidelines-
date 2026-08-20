# Stack Pack: Docker and Containerization

## Use when

- the project relies on Dockerfiles, docker-compose, dev containers, or containerized deployments
- work touches runtime packaging, local environments, or deployment parity

## Working rules

- understand the runtime target before editing the image
- keep images minimal and reproducible
- separate build-time and runtime concerns
- make environment variables and secrets handling explicit
- avoid fixing app issues by hiding them behind container hacks

## Common workflow

1. inspect Dockerfile, compose files, and environment assumptions
2. identify build, runtime, and dependency needs
3. update image steps with cache and security in mind
4. verify local container startup and required services
5. document changed ports, volumes, and env requirements

## Verification commands

Typical commands:

- `docker build .`
- `docker compose up --build`
- `docker compose config`

## Common pitfalls

- bloated images
- running as root unnecessarily
- missing `.dockerignore`
- leaking secrets into image layers
- mismatch between local compose and production runtime

## Security focus

- least-privilege container user where practical
- no secrets baked into images
- review exposed ports and network assumptions
- pin base images thoughtfully when needed
