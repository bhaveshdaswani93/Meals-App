import React from "react";
import {View, StyleSheet, FlatList } from "react-native";
import { useSelector } from 'react-redux';

import MealItem from '../components/MealItem';
// import console = require("console");


const MealList = props => {
  const favMeals = useSelector(state=>state.meals.favMeals)
  console.log('meallist comp: ',favMeals)

  const renderMeal = itemData => {
    const isFavaourite = favMeals.some(meal=>meal.id === itemData.item.id)
    console.log('meallist comp isFav: ',isFavaourite)
    return (
      <MealItem
        image={itemData.item.imageUrl}
        title={itemData.item.title}
        duration={itemData.item.duration}
        affordability={itemData.item.affordability}
        complexity={itemData.item.complexity}
        onSelectMeal={() => {
          props.navigation.navigate({
            routeName: "MealDetail",
            params: {
              mealId: itemData.item.id,
              mealTitle:itemData.item.title,
              isFav:isFavaourite
            }
          });
        }}
      />
    );
  };
  return (
    <View style={styles.screen}>
      <FlatList
      extraData={favMeals}
        data={props.data}
        keyExtractor={item => item.id}
        renderItem={renderMeal}
        style={styles.list}
      />
      {/* <Text>This is Category Meal Screen</Text>
      <Text>{category.title}</Text>
      <Button
        title="Go to Meal Detail"
        onPress={() => props.navigation.navigate("MealDetail")}
      />
      <Button title="Go Back" onPress={() => props.navigation.goBack()} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
    screen: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
    },
    list:{
        width:'100%'
    }
  });

export default MealList;
