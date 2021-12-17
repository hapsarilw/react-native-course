import React from "react";
import { useSelector } from 'react-redux';

import { CATEGORIES } from "../data/dummy-data";
import MealList from "../components/MealList";

const CategoryMealsScreen = (props) => {
  
  const catId = props.navigation.getParam("categoryId");
  // derive data & will return data from global state
  const availableMeals = useSelector(state => state.meals.filteredMeals); //retrieve data out of state & return it.

  // Find the meals that belong to that category selected
  const displayedMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(catId) >= 0
  );

  return (
   <MealList listData={displayedMeals} navigation={props.navigation}/>
  );
};

CategoryMealsScreen.navigationOptions = (navigationData) => {
  const catId = navigationData.navigation.getParam("categoryId");

  const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);

  return {
    headerTitle: selectedCategory.title,
  };
};

export default CategoryMealsScreen;