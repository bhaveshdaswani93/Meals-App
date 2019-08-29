import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

import { CATEGORIES } from "../data/dummy-data";
import MealList from "../components/MealList";

const CategoryMealsScreen = props => {
  const availableMeals = useSelector(state => state.meals.filteredMeals);
  const categoryId = props.navigation.getParam("categoryId");
  //   const category = CATEGORIES.find(cat => cat.id === categoryId);
  const catMeals = availableMeals.filter(
    meal => meal.categoryIds.indexOf(categoryId) >= 0
  );
    console.log('available meal: ',availableMeals.length);
  if (catMeals.length === 0) {
    return (
      <View style={styles.content}>
        <Text>Meals are empty.Please check your filter.</Text>
      </View>
    );
  }

  return <MealList data={catMeals} navigation={props.navigation} />;
};

CategoryMealsScreen.navigationOptions = navObj => {
  const categoryId = navObj.navigation.getParam("categoryId");
  const category = CATEGORIES.find(cat => cat.id === categoryId);
  return {
    title: category.title
  };
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default CategoryMealsScreen;
