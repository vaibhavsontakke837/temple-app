# Fix: App Not Opening in Expo Go

## Problem
Your app uses native modules that Expo Go doesn't support:
- `expo-notifications` (with custom config)
- `react-native-maps`

## Solution: Use Development Build

### Option 1: Build Locally (Recommended)
```bash
# Install EAS CLI
npm install -g eas-cli

# Login to Expo
eas login

# Create development build
npx expo run:android
# or
npx expo run:ios
```

### Option 2: Cloud Build with EAS
```bash
# Configure EAS
eas build:configure

# Build for Android
eas build --profile development --platform android

# Build for iOS
eas build --profile development --platform ios
```

### Option 3: Remove Native Modules (Quick Test)
Temporarily comment out in `app.json`:
```json
"plugins": [
  "expo-router",
  "expo-localization",
  "expo-web-browser",
  // ["expo-notifications", {...}],  // Comment this
  ["expo-font", {...}]
]
```

And remove `react-native-maps` usage from code.

## Check Current Server
Your dev server is running on port 8081 (PID 20200).
Scan the QR code again or check terminal for errors.
