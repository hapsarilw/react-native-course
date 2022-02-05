import * as React from "react";
import { Platform } from "react-native";
import {
  NavigationContainer,
  useNavigationContainerRef
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
                onPress={() =>
                  navigationRef.navigate('NewPlace')
                }
              />
            ),
          })}
        />
        <Stack.Screen name="PlaceDetail" component={PlaceDetailScreen} />
        <Stack.Screen name="NewPlace" component={NewPlaceScreen} options={{title: 'Add Place'}}/>
        <Stack.Screen name="MapScreen" component={MapScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default PlacesNavigator;
