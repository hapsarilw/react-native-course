import React from "react";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import HeaderButton from "../components/HeaderButton";
import MealList from "../components/MealList";
import { useSelector } from "react-redux";

const FavoritesScreen = (props) => {
  const favMeals = useSelector(state => state.meals.favoriteMeals);
  
  return <MealList listData={favMeals} navigation={props.navigation} />;
};

FavoritesScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Your Favorites",
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => {
            navData.navigation.toggleDrawer(); //Open/Close the drawer
          }}
        />
      </HeaderButtons>
    ),
  };
};

export default FavoritesScreen;
