import React from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Platform } from "react-native";

import { CATEGORIES } from '../data/dummy-data'
import Colors from "../constants/Colors";

import CategoryGridTile from '../components/CategoryGridTile'


const CategoriesScreen = props => {
    const renderGridItem = (itemData) => {
        return <CategoryGridTile
            onSelect={() => props.navigation.navigate({
                routeName: 'CategoryMeals', params: {
                    categoryId: itemData.item.id
                }
            })}
            title={itemData.item.title}
            color={itemData.item.color}
        />
    }
    console.log(props)
    return <FlatList contentContainerStyle={styles.list} keyExtractor={(item, index) => item.id} numColumns={2} data={CATEGORIES} renderItem={renderGridItem} />
}

CategoriesScreen.navigationOptions = {
    title: 'Categories',

}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },

    list: {
        // alignItems:'stretch'
    },
    categoryContainerExtended: {
        backgroundColor: 'blue'
    }
})

export default CategoriesScreen