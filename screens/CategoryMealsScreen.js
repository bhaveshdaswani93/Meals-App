import React from "react";
import { View, Text, StyleSheet,Button,Platform } from "react-native";

import { CATEGORIES } from "../data/dummy-data";
import Colors from "../constants/Colors";


const CategoryMealsScreen = props =>{
    const categoryId = props.navigation.getParam('categoryId')
    const category = CATEGORIES.find(cat=>cat.id === categoryId)
    console.log(category)
    return (
        <View style={styles.screen}>
            <Text>This is Category Meal Screen</Text>
            <Text>{category.title}</Text>
            <Button title="Go to Meal Detail" onPress={()=>props.navigation.navigate('MealDetail')} />
            <Button title="Go Back" onPress={()=>props.navigation.goBack()} />
        </View>
    )
}

CategoryMealsScreen.navigationOptions = (navObj) => {
    const categoryId = navObj.navigation.getParam('categoryId')
    const category = CATEGORIES.find(cat=>cat.id === categoryId)
    return  {
        title:category.title,
        
    }
}

const styles = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    }
})

export default CategoryMealsScreen