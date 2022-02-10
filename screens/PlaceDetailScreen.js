import React, {useEffect} from 'react';
import { Button, View, Text, StyleSheet  } from 'react-native';


function PlaceDetailScreen({ route, navigation }) { 
  const { placeTitle, placeId } = route.params;
  useEffect(() => {
    navigation.setOptions({ title: placeTitle })
  }, [])
  return (
    <View>
      <Text>Place Detail Screen</Text>
    </View>
  );
  
  
}


const styles = StyleSheet.create({});

export default PlaceDetailScreen;
