import React, { useState } from "react";
import { Text, View } from "react-native";
import * as Font from "expo-font";
import AppLoading from 'expo-app-loading';
import { useScreens } from 'react-native-screens';

import MealsNavigator from './navigation/MealsNavigator';

const fetchFonts = () => {
  return Font.loadAsync({
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
        onError={(err) => console.log(err)}
      />
    );
  }

  return (
    <MealsNavigator/>
  );
}
