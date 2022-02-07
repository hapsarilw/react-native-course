import React, { useState } from "react";
import {
  View,
  Button,
  Text,
  ActivityIndicator,
  ALert,
  StyleSheet,
  Alert,
} from "react-native";
import Colors from "../constants/Colors";
import * as Location from "expo-location";
import * as Permissions from "expo-permissions";

const LocationPicker = (props) => {
  const [isFetching, setIsFetching] = useState(false);
  const [pickedLocation, setPickedLocation] = useState();

  const verifyPermissions = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      Alert.alert(
        "Insufficient permissions!",
        "You need to grant camera permissions to use this app",
        [{ text: "Okay" }]
      );
      return false;
    }
    return true;
  };
  const getLocationHandler = async () => {
    const hasPermission = await verifyPermissions();
    if (!hasPermission) {
      return; // no need to continue
    }
    try {
      setIsFetching(true);
      // Result a promise in location variable
      const location = await Location.getCurrentPositionAsync({
        timeout: 5000,
      }); // 5 second
      console.log(location);
      setPickedLocation({
          lat: location.coords.latitude,
          lng: location.coords.longitude
      });
    } catch (err) {
      Alert.alert(
        "Could not fetch location!",
        "Please try again later or pick a location on the map.",
        [{ text: "Okay" }]
      );
    }
    setIsFetching(false);
  };
  return (
    <View style={styles.locationPicker}>
      <View style={styles.mapPreview}>
        {isFetching ? (
          <ActivityIndicator size="large" color={Colors.primary} />
        ) : (
          <Text>No location chosen yet!</Text>
        )}
      </View>
      <Button
        title="Get User Location"
        color={Colors.primary}
        onPress={getLocationHandler}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  locationPicker: {
    marginBottom: 15,
  },
  mapPreview: {
    marginBottom: 10,
    width: "100%",
    height: 150,
    borderColor: "#ccc",
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
});

export default LocationPicker;
