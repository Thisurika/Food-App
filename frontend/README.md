# Restaurant Mobile

This Expo React Native app connects to the existing backend API.

## Quick start

1. Install dependencies
   - npm install
2. Start the app
   - npm run start

## API configuration

Option 1 (Recommended): Do not set `EXPO_PUBLIC_API_URL`. The app will auto-detect
the Expo dev server host and use it as the API base URL.

Examples:
- Windows PowerShell
  - $env:EXPO_PUBLIC_API_URL="https://your-live-api.example.com"; npm run start

If you are using the Android emulator with the local backend, the default is `http://10.0.2.2:3000`.
