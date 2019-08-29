import React from "react";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useSelector } from "react-redux";
import { View, StyleSheet } from "react-native";

import HeaderButton from "../components/HeaderButton";
import MealList from "../components/MealList";
import DefaultText from "../components/DefautText";

const FavouritesScreen = props => {
  const favMeals = useSelector(state => state.meals.favMeals);

  // console.log(favMeals);
  // console.log(props);
  if (favMeals.length === 0) {
    return (
      <View style={styles.content}>
        <DefaultText>You do not have favourite meal yet</DefaultText>
      </View>
    );
  }

  return <MealList data={favMeals} navigation={props.navigation} />;
};

FavouritesScreen.navigationOptions = navObj => {
  return {
    title: "Your Favourite",
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => {
            navObj.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    )
  };
};

const styles = StyleSheet.create({
  content: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1
  }
});

export default FavouritesScreen;
