#!/bin/bash
cd "$(dirname "$0")"
ulimit -n 4096
export EXPO_NO_DOTENV=1
npx expo start --android

