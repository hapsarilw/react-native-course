import * as React from "react";
import { Platform, StyleSheet, TouchableOpacity } from "react-native";
import {
  NavigationContainer,
  useNavigationContainerRef,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import PlacesListScreen from "../screens/PlacesListScreen";
import PlaceDetailScreen from "../screens/PlaceDetailScreen";
import NewPlaceScreen from "../screens/NewPlaceScreen";
import MapScreen from "../screens/MapScreen";
import HeaderButton from "../components/HeaderButton";

import Colors from "../constants/Colors";

const PlacesNavigator = () => {
  const Stack = createStackNavigator();
  const navigationRef = useNavigationContainerRef();

  const savedPickedLocationHandler = () => {
        
  };

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: Platform.OS === "android" ? Colors.primary : "",
          },
          headerTintColor: Platform.OS === "android" ? "white" : Colors.primary,
        }}
      >
        <Stack.Screen
          name="PlacesList"
          component={PlacesListScreen}
          options={() => ({
            title: "All Places",
            headerRight: () => (
              <HeaderButton
                onPress={() => navigationRef.navigate("NewPlace")}
              />
            ),
          })}
        />
        <Stack.Screen name="PlaceDetail" component={PlaceDetailScreen} />
        <Stack.Screen
          name="NewPlace"
          component={NewPlaceScreen}
          options={{ title: "Add Place" }}
        />
        <Stack.Screen
          name="Map"
          component={MapScreen}          
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  headerButton: {
    marginHorizontal: 20
  },
  headerButtonText: {
    fontSize: 16,
    color: Platform.OS === 'android' ? 'white' : Colors.primary
  }

});

export default PlacesNavigator;
