import React from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const MapScreen = () => {
    const markers = [
        { latitude: 20.9671, longitude: -89.6237, title: 'Marker 1' },
        { latitude: 21.1619, longitude: -89.0736, title: 'Marker 2' },
        { latitude: 20.7096, longitude: -89.0943, title: 'Marker 3' },
        // Add more markers here...
    ];

    return (
        <View style={styles.container}>
            <MapView
                style={styles.map}
                initialRegion={{
                    latitude: 20.9671,
                    longitude: -89.6237,
                    latitudeDelta: 0.5,
                    longitudeDelta: 0.5,
                }}
            >
                {markers.map((marker, index) => (
                    <Marker
                        key={index}
                        coordinate={{ latitude: marker.latitude, longitude: marker.longitude }}
                        title={marker.title}
                    />
                ))}
            </MapView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        flex: 1,
    },
});

export default MapScreen;