import React from "react";

import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealList from '../components/MealList'

const CategoryMealsScreen = props => {
  const categoryId = props.navigation.getParam("categoryId");
  //   const category = CATEGORIES.find(cat => cat.id === categoryId);
  const catMeals = MEALS.filter(
    meal => meal.categoryIds.indexOf(categoryId) >= 0
  );
  //   console.log(category);
  
  return <MealList data={catMeals} navigation={props.navigation} />;
};

CategoryMealsScreen.navigationOptions = navObj => {
  const categoryId = navObj.navigation.getParam("categoryId");
  const category = CATEGORIES.find(cat => cat.id === categoryId);
  return {
    title: category.title
  };
};


export default CategoryMealsScreen;
