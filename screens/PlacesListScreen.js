import React, { useEffect } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import PlaceItem from "../components/PlaceItem";
import * as placesActions from '../store/places-actions';

function PlacesListScreen({navigation}) {
  const places = useSelector((state) => state.places.places);
  const dispatch = useDispatch();

  // load data once the app start
  useEffect(() => {
    dispatch(placesActions.loadPlaces());
  }, [dispatch]);

  return (
    <FlatList
      data={places}
      keyExtractor={(item) => item.id}
      renderItem={(itemData) => (
        <PlaceItem
          image={itemData.item.imageUri}
          title={itemData.item.title}
          address={itemData.item.address}
          onSelect={() => {
            navigation.navigate('PlaceDetail', {
              placeTitle: itemData.item.title,
              placeId: itemData.item.id,
            });
          }}
        />
      )}
    />
  );
}

const styles = StyleSheet.create({});

export default PlacesListScreen;
