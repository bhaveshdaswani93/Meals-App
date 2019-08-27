import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator,
  createDrawerNavigator
} from "react-navigation";
import { Platform,Text } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";

import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import FavouritesScreen from "../screens/FavouritesScreen";
import FilterScreen from "../screens/FiltersScreen";
import Colors from "../constants/Colors";

const defaultNavOpt = {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.primaryColor : ""
  },
  headerTintColor: Platform.OS === "android" ? "#fff" : Colors.primaryColor,
  headerTitleStyle: {
   fontFamily:'open-sans-bold',
   
  },
};

const MealsNavigator = createStackNavigator(
  {
    Categories: CategoriesScreen,
    CategoryMeals: {
      screen: CategoryMealsScreen
    },
    MealDetail: MealDetailScreen
  },
  {
    defaultNavigationOptions: defaultNavOpt
  }
);

const FavNavigator = createStackNavigator(
  {
    Favourite: FavouritesScreen,
    MealDetail: MealDetailScreen
  },
  {
    defaultNavigationOptions: defaultNavOpt
  }
);

const tabScreenConfig = {
  Meals: {
    screen: MealsNavigator,
    navigationOptions: {
      tabBarIcon: tabInfo => {
        return (
          <Ionicons name="ios-restaurant" color={tabInfo.tintColor} size={25} />
        );
      },
      tabBarColor: Colors.primaryColor,
      tabBarLabel: Platform.OS === 'sandbox'? <Text style={{fontFamily:'open-sans-bold'}}>Meals</Text>:'' ,
    }
  },
  Favourites: {
    screen: FavNavigator,
    navigationOptions: {
      tabBarIcon: tabInfo => {
        return <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />;
      },
        tabBarLabel: Platform.OS === 'sandbox'? <Text style={{fontFamily:'open-sans-bold'}}>Favourite</Text>:'' ,
      tabBarColor: Colors.accentColor
    }
  }
};

const MealsTabNavigator =
  Platform.OS === "android"
    ? createMaterialBottomTabNavigator(tabScreenConfig, {
        activeTintColor: "white",
        barStyle: {
          backgroundColor: Colors.primaryColor
        },
        shifting: true
      })
    : createBottomTabNavigator(tabScreenConfig, {
        tabBarOptions: {
          activeTintColor: Colors.accentColor,
          labelStyle :{
             fontFamily:'open-sans-bold' 
          }
        }
      });
const FilterNav = createStackNavigator({
  Filter: FilterScreen
},
{
  defaultNavigationOptions: defaultNavOpt
});

const MealsDrawerNavigator = createDrawerNavigator({
  MealTabNav: { screen: MealsTabNavigator,navigationOptions:{
    drawerLabel :'Meals'
  } },
  Filter: FilterNav
},{
    contentOptions:{
        activeTintColor :Colors.accentColor    
    }
    
});

export default createAppContainer(MealsDrawerNavigator);
