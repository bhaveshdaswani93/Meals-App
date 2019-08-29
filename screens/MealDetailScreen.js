import React,{ useEffect,useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView
} from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useSelector,useDispatch } from 'react-redux';

import HeaderButton from "../components/HeaderButton";
import DefautText from '../components/DefautText';
import { toggleFavourite } from "../store/actions/meals";

const MealDetailScreen = props => {
  const availableMeals = useSelector(state=>state.meals.meals)
  const mealId = props.navigation.getParam("mealId");
  const meal = availableMeals.find(meal => meal.id === mealId);
  const dispatch = useDispatch();
  const isFavMeal = useSelector(state=>state.meals.favMeals.some(mealfav=>mealfav.id === meal.id))
  
  const toggleFavouriteHandler = useCallback(() =>{
    dispatch(toggleFavourite(meal.id))
  },[meal,dispatch])

  

  useEffect(()=>{
    // props.navigation.setParams({mealTitle:meal.title})
    props.navigation.setParams({
      toggleFav:toggleFavouriteHandler
    })
  },[toggleFavouriteHandler])
  useEffect(()=>{
    props.navigation.setParams({
      isFav:isFavMeal
    })
  },[isFavMeal])
  
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
  // const mealId = navObj.navigation.getParam("mealId");
  // const meal = MEALS.find(meal => meal.id === mealId);
  const toggleFavourite = navObj.navigation.getParam('toggleFav')
  const mealTitle = navObj.navigation.getParam('mealTitle')
  const isFav = navObj.navigation.getParam('isFav')

  return {
    title: mealTitle,
    headerRight: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item title="Favourite" iconName={isFav?"ios-star":"ios-star-outline"} onPress={toggleFavourite} />
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
