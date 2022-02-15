import { copyAsync } from "expo-file-system";
import React, { useState, useEffect, useCallback } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import MapView, { Marker } from "react-native-maps";

import Colors from "../constants/Colors";

const MapScreen = (props) => {
  console.log("-----TEST------" + JSON.stringify(props));
  const initialLocation = props.route.params.initialLocation;
  const readonly = props.route.params.readonly;

  const [selectedLocation, setSelectedLocation] = useState(initialLocation);

  const mapRegion = {
    latitude: initialLocation ? initialLocation.lat : 37.78,
    longitude: initialLocation ? initialLocation.lng : -122.43,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };
  

  const selectLocationHandler = (event) => {
    if(readonly){
      return; // picking location disabled
    }
    setSelectedLocation({
      lat: event.nativeEvent.coordinate.latitude,
      lng: event.nativeEvent.coordinate.longitude,
    });
  };

  const savedPickedLocationHandler = useCallback(() => {
    if (!selectedLocation) {
      // If undefined
      // could show an alert!
      return;
    }
    props.navigation.navigate({ name: "NewPlace", params: { pickedLocation : selectedLocation } });
  }, [selectedLocation]);

  let markerCoordinates;

  if (selectedLocation) {
    markerCoordinates = {
      latitude: selectedLocation.lat,
      longitude: selectedLocation.lng,
    };
  }

  React.useLayoutEffect(
    (navData) => {      
      props.navigation.setOptions({
        headerRight: () => (
          <TouchableOpacity
            style={styles.headerButton}
            onPress={savedPickedLocationHandler}
          >
            <Text style={styles.headerButtonText}>Save</Text>
          </TouchableOpacity>
        ),
      });
    },
    [savedPickedLocationHandler]
  );

  return (
    <MapView
      style={styles.map}
      region={mapRegion}
      onPress={selectLocationHandler}
    >
      {markerCoordinates && (
        <Marker title="Picked Location" coordinate={markerCoordinates}></Marker>
      )}
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
  headerButton: {
    marginHorizontal: 20,
  },
  headerButtonText: {
    fontSize: 16,
    color: Platform.OS === "android" ? "white" : Colors.primary,
  },
});

export default MapScreen;
