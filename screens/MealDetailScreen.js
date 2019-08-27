import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  ScrollView
} from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import { MEALS } from "../data/dummy-data";
import HeaderButton from "../components/HeaderButton";
import DefautText from '../components/DefautText'

const MealDetailScreen = props => {
  const mealId = props.navigation.getParam("mealId");
  const meal = MEALS.find(meal => meal.id === mealId);
  return (
    <ScrollView>
      <Image source={{uri:meal.imageUrl}} style={styles.image} />
      <View style={styles.mealRow}>
        <DefautText>{meal.duration}</DefautText>
        <DefautText>{meal.affordability.toUpperCase()}</DefautText>
        <DefautText>{meal.complexity.toUpperCase()}</DefautText>
      </View>
      <Text style={styles.title}>Ingredient</Text>
      {meal.ingredients.map(ingredient=><Text key={ingredient} style={styles.detail}>{ingredient}</Text>)}
      <Text style={styles.title}>Steps</Text>
      {meal.steps.map(step=><Text key={step} style={styles.detail}>{step}</Text>)}
    </ScrollView>
  );
};

MealDetailScreen.navigationOptions = navObj => {
  const mealId = navObj.navigation.getParam("mealId");
  const meal = MEALS.find(meal => meal.id === mealId);

  return {
    title: meal.title,
    headerRight: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item title="Favourite" iconName="ios-star" />
      </HeaderButtons>
    )
  };
};

const styles = StyleSheet.create({
  image:{
      width:'100%',
      height:200,
  },
  mealRow:{
      flexDirection:'row',
      backgroundColor:'#ccc',
      padding:10,
      justifyContent:"space-around"
  },
  title:{
      fontFamily:'open-sans-bold',
      fontSize:22,
      textAlign:"center"
  },
  detail:{
      padding:10,
      marginHorizontal:20,
      marginVertical:10,
      borderColor:'black',
      borderWidth:1
  }
});

export default MealDetailScreen;
