# Quick Setup Guide for Android Studio with Pixel 9

## Step-by-Step Setup

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Google Maps API Key

**IMPORTANT:** You must add your Google Maps API key before running on Android!

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing one
3. Enable "Maps SDK for Android"
4. Create credentials (API Key)
5. Copy your API key
6. Open `app.json` and replace `YOUR_GOOGLE_MAPS_API_KEY` with your key

### 3. Set Up Android Emulator (Pixel 9)

1. Open Android Studio
2. Go to Tools → Device Manager
3. Create Virtual Device
4. Select Pixel 9 (or Pixel 9 Pro)
5. Download a system image (API 34 - Android 14 recommended)
6. Finish setup

### 4. Run the App

#### Method 1: Using Expo CLI (Recommended)
```bash
# Start Expo dev server
npm start

# Then press 'a' to open on Android emulator
# Or scan QR code with Expo Go app
```

#### Method 2: Direct Android Build
```bash
# Make sure emulator is running first!
npm run android
```

#### Method 3: Development Build
```bash
# Install EAS CLI globally
npm install -g eas-cli

# Build development version
eas build --profile development --platform android

# Install APK on emulator/device
```

### 5. Troubleshooting Common Issues

**Issue: Maps show blank/gray screen**
- Solution: Check that Google Maps API key is set correctly in `app.json`
- Verify Maps SDK for Android is enabled in Google Cloud Console

**Issue: Location not working**
- Solution: Grant location permissions in Android Settings → Apps → mapApp → Permissions

**Issue: Build fails**
- Solution: Clear cache: `npx expo start -c`
- Delete `node_modules` and reinstall: `rm -rf node_modules && npm install`

**Issue: Emulator not detected**
- Solution: Make sure Android emulator is running before executing `npm run android`
- Check that `ANDROID_HOME` environment variable is set

### 6. Testing Features

- ✅ Map should display with Google Maps styling
- ✅ Two markers visible (San Francisco City Center, Golden Gate Bridge)
- ✅ Tap markers to see alert with name
- ✅ Tap marker callout to see "Hello" text
- ✅ "Focus" button in header navigates to Green Bay Stadium
- ✅ Location button centers map on your location
- ✅ Dragging map logs region changes to console

## Notes for Pixel 9 Emulator

- Ensure Google Play Services is installed (use a system image with Google APIs)
- API Level 34 (Android 14) is recommended
- Make sure location services are enabled in emulator settings
- Test with both Wi-Fi and GPS location providers

