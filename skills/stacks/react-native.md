# Stack Pack: React Native

## Use when

- the project is a React Native app
- work touches navigation, state, native modules, permissions, offline behavior, or release builds

## Working rules

- understand iOS vs Android behavior before changing cross-platform code
- keep UI, state, and service logic clearly separated
- treat permissions, deep links, notifications, and storage as high-risk areas
- confirm whether Expo or bare React Native is in use

## Common workflow

1. inspect navigation, state, and native integration boundaries
2. identify the platform-sensitive parts of the change
3. implement behavior with attention to loading, error, and offline states
4. test on both platforms where the feature matters
5. verify build, lint, and test tooling for the chosen setup

## Common pitfalls

- platform-specific regressions hidden by single-device testing
- navigation race conditions
- weak offline assumptions
- permission flows not handled end-to-end
- native build steps ignored until late

## Security focus

- secure token storage where applicable
- validate deep links and incoming data
- review permissions and third-party SDK behavior carefully
