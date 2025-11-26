/**
 * Main Map Application Component
 * 
 * This component displays an interactive map centered on the University of Oklahoma campus
 * with markers for four Oklahoma universities. It includes a Focus button to zoom out and
 * show all markers simultaneously.
 */

import React, { useEffect, useRef } from 'react';
import MapView, { Callout, Marker, Region } from 'react-native-maps';
import { Alert, StyleSheet, Text, TouchableOpacity, View, SafeAreaView } from 'react-native';
import { useNavigation } from 'expo-router';
import { markers } from './assets/markers';

/**
 * Initial map region configuration
 * Sets the map's starting view to center on the University of Oklahoma campus in Norman, OK
 * latitudeDelta and longitudeDelta control the zoom level (smaller values = more zoomed in)
 */
const INITIAL_REGION = {
	latitude: 35.2056,      // University of Oklahoma campus latitude
	longitude: -97.4456,     // University of Oklahoma campus longitude
	latitudeDelta: 0.05,    // Vertical zoom level (approximately campus-level view)
	longitudeDelta: 0.05    // Horizontal zoom level (approximately campus-level view)
};

export default function App() {
	// Reference to the MapView component for programmatic control
	const mapRef = useRef<any>(null);
	// Navigation hook for configuring header options
	const navigation = useNavigation();

	/**
	 * Focus button handler function
	 * Zooms the map out to show all four Oklahoma university markers simultaneously
	 * Uses fitToCoordinates to automatically calculate the best view that includes all markers
	 */
	const focusMap = () => {
		// Extract coordinates from all markers for the fitToCoordinates method
		const coordinates = markers.map(marker => ({
			latitude: marker.latitude,
			longitude: marker.longitude,
		}));

		// Animate the map to show all markers with padding around the edges
		mapRef.current?.fitToCoordinates(coordinates, {
			edgePadding: { top: 50, right: 50, bottom: 50, left: 50 }, // Padding in pixels
			animated: true, // Smooth animation when zooming
		});
	};

	/**
	 * Configure navigation header options
	 * Places the Focus button in the top-left corner of the screen
	 */
	useEffect(() => {
		navigation.setOptions({
			headerLeft: () => (
				<TouchableOpacity onPress={focusMap}>
					<View style={{ padding: 10 }}>
						<Text>Focus</Text>
					</View>
				</TouchableOpacity>
			)
		});
	}, [navigation]);

	/**
	 * Handler for when a marker is pressed
	 * Displays an alert with the university name
	 */
	const onMarkerSelected = (marker: any) => {
		Alert.alert(marker.name);
	};

	/**
	 * Handler for when a callout is pressed
	 * Currently logs the event for debugging purposes
	 */
	const calloutPressed = (ev: any) => {
		console.log(ev);
	};

	/**
	 * Handler for when the map region changes
	 * Logs the new region coordinates for debugging
	 */
	const onRegionChange = (region: Region) => {
		console.log(region);
	};

	return (
		// SafeAreaView ensures content doesn't overlap with system UI (notches, status bars)
		<SafeAreaView style={{ flex: 1 }}>
			{/* 
				MapView Component Configuration:
				- initialRegion: Sets the starting map view to University of Oklahoma campus
				- showsUserLocation: Displays the user's current location on the map
				- showsMyLocationButton: Adds a button to center map on user's location
				- mapPadding: Adds bottom padding to ensure Google logo is visible
			*/}
			<MapView
				style={StyleSheet.absoluteFillObject}  // Map fills entire screen
				initialRegion={INITIAL_REGION}         // Start centered on OU campus
				showsUserLocation                      // Show user's current location
				showsMyLocationButton                  // Show button to center on user location
				ref={mapRef}                          // Reference for programmatic control
				onRegionChangeComplete={onRegionChange} // Callback when map region changes
				mapPadding={{ bottom: 50, top: 0, left: 0, right: 0 }} // Bottom padding for Google logo
			>
				{/* 
					Render markers for each of the four Oklahoma universities
					Each marker displays the university name and shows a callout when tapped
				*/}
				{markers.map((marker, index) => (
					<Marker
						key={index}                    // Unique key for React list rendering
						title={marker.name}            // Title shown above marker when selected
						description={marker.name}     // Description shown in default callout
						coordinate={{
							latitude: marker.latitude,
							longitude: marker.longitude,
						}}
						onPress={() => onMarkerSelected(marker)} // Handler when marker is tapped
						tracksViewChanges={false}      // Performance optimization
					>
						{/* Custom callout that displays when marker is tapped */}
						<Callout tooltip onPress={calloutPressed}>
							<View style={{ padding: 10, backgroundColor: 'white', borderRadius: 5 }}>
								<Text style={{ fontSize: 16, fontWeight: 'bold' }}>{marker.name}</Text>
							</View>
						</Callout>
					</Marker>
				))}
			</MapView>
		</SafeAreaView>
	);
}

