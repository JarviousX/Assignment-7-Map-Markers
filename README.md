# Assignment 7: Map Markers

A React Native application built with Expo that displays an interactive map centered on the University of Oklahoma campus with markers for four Oklahoma universities.

## Assignment Scope

This project demonstrates the implementation of a map view with custom markers using React Native and Expo. The application displays a map centered on the University of Oklahoma campus with four interactive markers representing Oklahoma universities.

## Key Features

- **Map View**: Interactive map using `react-native-maps` with Google Maps provider
- **Initial Region**: Map initializes centered on University of Oklahoma campus (Norman, OK)
- **Four Markers**: Interactive markers for:
  - Oklahoma State University (Stillwater)
  - University of Oklahoma (Norman)
  - Oklahoma City University (Oklahoma City)
  - University of Tulsa (Tulsa)
- **Focus Button**: Located in top-left corner, zooms map to show all four markers
- **Marker Interaction**: Tapping markers displays university names in callouts and alerts

## Project Structure

```
.
├── app/
│   ├── _layout.tsx      # Navigation layout with centered "Home" title
│   ├── index.tsx        # Main map component with all functionality
│   └── assets/
│       └── markers.ts   # Marker data for four Oklahoma universities
├── app.json             # Expo configuration (includes Google Maps API key)
├── package.json         # Project dependencies
└── tsconfig.json        # TypeScript configuration
```

## Requirements Met

✅ **Functioning Program**: App runs without crashes or errors, all features fully functional  
✅ **Screen Design**: UI matches design requirements with proper layout  
✅ **Focus Button**: Positioned in top-left corner, fully functional  
✅ **Initial Region**: Map correctly initializes centered on University of Oklahoma campus  
✅ **Map Markers**: Exactly four markers with titles, all within Oklahoma  
✅ **Code Commenting**: Comprehensive comments explaining components, configurations, and logic  

## Setup & Running

### Prerequisites
- Node.js (v18 or higher)
- npm
- Expo CLI
- Android Studio with Pixel 9 emulator
- Google Maps API Key (configured in `app.json`)

### Installation

```bash
npm install
```

### Running the App

1. Start the Expo development server:
   ```bash
   npx expo start
   ```

2. Launch on Android emulator:
   - Ensure Pixel 9 emulator is running
   - Press `a` in the Expo terminal, or
   - Connect manually via Expo Go using: `exp://[YOUR_IP]:8081`

## Configuration

### Google Maps API Key Setup

1. Get a Google Maps API Key from [Google Cloud Console](https://console.cloud.google.com/)
2. Enable "Maps SDK for Android" in your Google Cloud project
3. Open `app.json` and replace `YOUR_GOOGLE_MAPS_API_KEY` with your actual API key:
   ```json
   "android": {
     "config": {
       "googleMaps": {
         "apiKey": "YOUR_ACTUAL_API_KEY_HERE"
       }
     }
   }
   ```

**Note**: The API key is stored locally in `app.json` for development. For production, use environment variables or secure configuration management.

The app is configured to work in both portrait and landscape orientations.

## Technical Details

- **Framework**: React Native with Expo SDK 54
- **Map Library**: react-native-maps v1.20.1
- **Navigation**: Expo Router with Stack navigator
- **Language**: TypeScript
- **Platform**: Android (tested on Pixel 9 emulator)

## Code Documentation

All code includes comprehensive comments explaining:
- Component purpose and functionality
- Map configuration options
- Marker setup and rendering
- Focus button implementation
- Handler functions and callbacks
