/**
 * Map Markers Configuration
 * 
 * This file contains the data for four map markers representing Oklahoma universities.
 * Each marker includes:
 * - latitude/longitude: Precise GPS coordinates for the university location
 * - latitudeDelta/longitudeDelta: Used for region calculations (not directly used in Marker component)
 * - name: Full name of the university displayed on the marker
 */

export const markers = [
	// Oklahoma State University - Located in Stillwater, OK
	{
		latitude: 36.1266,
		longitude: -97.0735,
		latitudeDelta: 0.01,
		longitudeDelta: 0.01,
		name: 'Oklahoma State University'
	},
	// University of Oklahoma - Located in Norman, OK
	{
		latitude: 35.1987,
		longitude: -97.4449,
		latitudeDelta: 0.01,
		longitudeDelta: 0.01,
		name: 'University of Oklahoma'
	},
	// Oklahoma City University - Located in Oklahoma City, OK
	{
		latitude: 35.4955,
		longitude: -97.5410,
		latitudeDelta: 0.01,
		longitudeDelta: 0.01,
		name: 'Oklahoma City University'
	},
	// University of Tulsa - Located in Tulsa, OK
	{
		latitude: 36.1521,
		longitude: -95.9461,
		latitudeDelta: 0.01,
		longitudeDelta: 0.01,
		name: 'University of Tulsa'
	}
];

