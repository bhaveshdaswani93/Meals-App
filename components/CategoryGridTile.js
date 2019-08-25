import React from 'react';
import { View, Text, StyleSheet,TouchableOpacity,TouchableNativeFeedback,Platform } from 'react-native';

const CategoryGridTile = props => {
    let TouchableCmp = TouchableOpacity;
    if(Platform.OS === 'android' && Platform.Version >= 21)
    {
        TouchableCmp = TouchableNativeFeedback;
    }    
    Platform.OS === 'android' ? TouchableNativeFeedback:TouchableOpacity
    return (
        <View style={{...styles.categoryContainer,backgroundColor:props.color}} >
            <TouchableCmp  style={{flex:1}} onPress={props.onSelect} >
            <View style={styles.categoryContainerExtended} >
                <Text style={{ color: 'white' }}>{props.title}</Text>
            </View>
        </TouchableCmp>
        </View>
        
    );
}

const styles = StyleSheet.create({
    categoryContainer: {
        flex: 1,
        height: 170,
        margin: 13,
        backgroundColor: 'grey'

    },
})

export default CategoryGridTile