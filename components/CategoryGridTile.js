import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform
} from "react-native";

const CategoryGridTile = props => {
  let TouchableCmp = TouchableOpacity;
  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }
  Platform.OS === "android" ? TouchableNativeFeedback : TouchableOpacity;
  return (
    <View style={styles.gridItem}>
      <TouchableCmp style={styles.touchable} onPress={props.onSelect}>
        <View style={{ ...styles.catgory, backgroundColor: props.color }}>
          <Text style={styles.categoryTitle} numberOfLines={2}>
            {props.title}
          </Text>
        </View>
      </TouchableCmp>
    </View>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    height: 170,
    margin: 13,
    borderRadius: 10,
    overflow: Platform.OS === "android" && Platform.Version >= 21 ? "hidden":"visible",
    elevation: 5,
    // backgroundColor: 'grey'
  },
  catgory: {
    flex: 1,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.3,
    
    borderRadius: 10,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    padding: 10
  },
  touchable: {
    flex:1
  },
  categoryTitle: {
    fontSize: 20,
    fontFamily: "open-sans-bold",
    textAlign: "right"
  }
});

export default CategoryGridTile;
