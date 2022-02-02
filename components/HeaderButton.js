import React from "react";
import { Platform } from "react-native";
import { Colors } from "../constants/Colors";
import { AntDesign } from '@expo/vector-icons'; 
import { StyleSheet } from "react-native";

const CustomHeaderButton = (props) => {
  return <AntDesign {...props} name="plus" size={24} color={Platform.OS === 'android' ? 'white' : Colors.primary} style={styles.addIcon} />;
};

const styles = StyleSheet.create({
    addIcon: {
        paddingRight: 20
    }
})
export default CustomHeaderButton;
