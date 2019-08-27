import React from "react";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import HeaderButton from "../components/HeaderButton";
import MealList from "../components/MealList";
import { MEALS } from "../data/dummy-data";

const FavouritesScreen = props =>{
    const favMeals = MEALS.filter(
        meal => meal.id === 'm1' ||  meal.id === 'm2'
      );
        console.log(favMeals);
        console.log(props)
      
      return <MealList data={favMeals} navigation={props.navigation} />;
}

FavouritesScreen.navigationOptions = (navObj) => {
    return {
      title: "Your Favourite",
      headerLeft: (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item title='Menu' iconName="ios-menu" onPress={() => {
              navObj.navigation.toggleDrawer()
          }} />
        </HeaderButtons>
      )
    };
  };

export default FavouritesScreen