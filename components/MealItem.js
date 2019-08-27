import React from "react";
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity
} from "react-native";

import DefautText from './DefautText';

const MealItem = props => {
  return (
    <View style={styles.menuItem}>
      <TouchableOpacity onPress={props.onSelectMeal}>
        <View style={{ ...styles.row, ...styles.mealHeader }}>
          <ImageBackground style={styles.bgImage} source={{ uri: props.image }}>
            <View  style={styles.titleContainer}>
              <Text numberOfLines={1} style={styles.title}>
                {props.title}
              </Text>
            </View>
          </ImageBackground>
        </View>
        <View style={{ ...styles.row, ...styles.mealBody }}>
          <DefautText>{props.duration}</DefautText>
          <DefautText>{props.affordability.toUpperCase()}</DefautText>
          <DefautText>{props.complexity.toUpperCase()}</DefautText>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  menuItem: {
    height: 200,
    backgroundColor: "#f5f5f5",
    borderRadius: 10,
    marginVertical: 10,
    overflow: "hidden"
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-around"
  },
  bgImage: {
    height: "100%",
    width: "100%",
    justifyContent: "flex-end"
    // alignItems:"center"
  },
  mealHeader: {
    height: "80%"
  },
  mealBody: {
    alignItems: "center",
    height: "20%"
  },
  title: {
    
    color: "white",
    fontFamily: "open-sans-bold",
    fontSize: 20,
    
  },
  titleContainer:{
    backgroundColor: "rgba(0,0,0,0.6)",
    padding: 10,
    alignItems: "center",
  }
});

export default MealItem;
