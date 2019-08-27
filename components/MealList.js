import React from "react";
import {View, StyleSheet, FlatList } from "react-native";

import MealItem from '../components/MealItem';


const MealList = props => {
  const renderMeal = itemData => {
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
              mealId: itemData.item.id
            }
          });
        }}
      />
    );
  };
  return (
    <View style={styles.screen}>
      <FlatList
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
