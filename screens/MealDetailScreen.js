import React from "react";
import { View, Text, StyleSheet,Button } from "react-native";

const MealDetailScreen = props =>{
    return (
        <View style={styles.screen}>
            <Text>This is Meal Detail Screen</Text>
            <Button title="Go To Navigation" onPress={()=>props.navigation.popToTop()} />
            <Button title="Replace to Category meal" onPress={()=>props.navigation.replace('CategoryMeals')} />
        </View>
    )
}

const styles = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    }
})

export default MealDetailScreen