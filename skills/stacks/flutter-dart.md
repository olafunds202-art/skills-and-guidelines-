# Stack Pack: Flutter + Dart

## Use when

- the project is a Flutter mobile, web, or desktop app
- work touches widgets, state, navigation, platform integrations, or release configuration

## Working rules

- understand the state-management approach already in use before editing
- keep widgets focused and composable
- separate UI, state, and service logic clearly
- avoid platform-specific assumptions unless you confirm the target platforms
- treat permissions, storage, and background behavior as high-risk areas

## Common workflow

1. inspect app structure, routing, and state-management pattern
2. identify affected widgets, services, and models
3. update behavior with attention to loading, error, and offline states
4. test on the relevant target platforms where possible
5. verify formatting, analysis, and tests

## Verification commands

Typical commands:

- `flutter pub get`
- `dart format .`
- `flutter analyze`
- `flutter test`

## Common pitfalls

- rebuilding too much of the widget tree unnecessarily
- mixing API logic directly into widgets
- brittle async flows around navigation or lifecycle
- missing platform permission handling
- storing sensitive values insecurely

## Security focus

- use secure storage for sensitive tokens where appropriate
- validate deep links and external input carefully
- review platform permission usage and scope
- avoid logging secrets, tokens, or personal data

## Delivery notes

- clarify whether the target is Android, iOS, web, desktop, or multiple
- confirm release-mode behavior for networking, permissions, and assets
