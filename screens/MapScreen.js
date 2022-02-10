import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import MapView from "react-native-maps";

const MapScreen = (props) => {
  const mapRegion = {
    latitude: 37.78,
    langitude: -122.43,
    latitudeDelta: 0.0922,
    longitudedelta: 0.0421
  };
  return <MapView style={styles.map} region={mapRegion}/>;
};

const styles = StyleSheet.create({
  map: {
    flex: 1
  }
});

export default MapScreen;
