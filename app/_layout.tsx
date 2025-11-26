/**
 * Navigation Layout Component
 * 
 * Configures the navigation structure for the app using Expo Router's Stack navigator.
 * Sets the main screen title to "Home" and centers it in the header.
 */

import React from 'react';
import { Stack } from 'expo-router';

const Layout = () => (
	<Stack>
		{/* Main screen configuration with centered "Home" title */}
		<Stack.Screen name="index" options={{ title: 'Home', headerTitleAlign: 'center' }} />
	</Stack>
);

export default Layout;

