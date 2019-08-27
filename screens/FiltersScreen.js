import React, { useState, useEffect,useCallback } from "react";
import { View, Text, StyleSheet, Switch, Button } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import HeaderButton from "../components/HeaderButton";
import Colors from "../constants/Colors";

const FilterSwitch = props => {
  return (
    <View style={styles.filterContainer}>
      <Text>{props.label}</Text>
      <Switch
        value={props.state}
        onValueChange={props.onChange}
        trackColor={{
          true: Colors.primaryColor
        }}
        thumbColor={Colors.primaryColor}
      />
    </View>
  );
};

const FiltersScreen = props => {
  const [isGluteenFree, setIsGluteenFree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);

  const [hello,setHello] = useState("123");

  const filterSave = useCallback(() =>{
    const filterSet = {
      isGluteenFree:isGluteenFree,
      isVegan:isVegan,
      isVegetarian:isVegetarian,
      isLactoseFree:isLactoseFree
    }
    console.log(filterSet)
  },[isGluteenFree,isVegan,isVegetarian,isLactoseFree])

  useEffect(() => {
    
    props.navigation.setParams({
      save: filterSave
    });
  }, [filterSave]);

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Filter Meal</Text>
      <FilterSwitch
        label="Gluten Free"
        state={isGluteenFree}
        onChange={newValue => setIsGluteenFree(newValue)}
      />
      <Button
        title="change"
        onPress={() => {
          // console.log(hello);
          setHello('145');
          // console.log(hello);
        }}
      />
      <FilterSwitch
        label="Vegan"
        state={isVegan}
        onChange={newValue => setIsVegan(newValue)}
      />
      <FilterSwitch
        label="Vegetariam"
        state={isVegetarian}
        onChange={newValue => setIsVegetarian(newValue)}
      />
      <FilterSwitch
        label="Lactose Free"
        state={isLactoseFree}
        onChange={newValue => setIsLactoseFree(newValue)}
      />
    </View>
  );
};

FiltersScreen.navigationOptions = navObj => {
  return {
    title: "Filter",
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
    ),
    headerRight: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Save"
          iconName="ios-save"
          onPress={navObj.navigation.getParam("save")}
        />
      </HeaderButtons>
    )
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center"
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    textAlign: "center"
  },
  filterContainer: {
    flexDirection: "row",
    width: "80%",
    justifyContent: "space-between",
    marginVertical: 10
  }
});

export default FiltersScreen;
