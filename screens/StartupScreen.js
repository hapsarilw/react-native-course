// Check when the user logging in: whether the user is authenticating or not
import React, { useEffect } from "react"; // useEffect -> check async storage for a valid token.
import { View, ActivityIndicator, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { useDispatch } from "react-redux";

import Colors from "../constants/Colors";
import * as authActions from '../store/actions/auth';

const StartupScreen = (props) => {
    const dispatch = useDispatch();
  useEffect(() => {
    // Check the async code for a valid Token
    const tryLogin = async () => {
      const userData = await AsyncStorage.getItem("userData");
      if (!userData) { // If we can't find any key -> certainly not logging in
        props.navigation.navigate('Auth'); // Need to navigate to Navigator
        return; // not continue anything
      }
      const transformedData = JSON.parse(userData);
      // If token might be invalid
      const { token, userId, expiryDate } = transformedData;
      const expirationDate = new Date(expiryDate);

      if(expirationDate <= new Date() || !token || !userId){
          props.navigation.navigate('Auth');
          return;
      }

      props.navigation.navigate('Shop');
      dispatch(authActions.authenticate(userId, token));

    };
    tryLogin();
  }, [dispatch]);
  return (
    <View style={styles.screen}>
      <ActivityIndicator size="large" color={Colors.primary} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default StartupScreen;
