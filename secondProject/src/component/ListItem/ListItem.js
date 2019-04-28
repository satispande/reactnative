import React from 'react';
import {View,Text,StyleSheet,TouchableHighlight,Image} from 'react-native';

const listItem=(props) => (
    <TouchableHighlight onPress={props.onItemPressed}> 
        <View style={styles.listItem} >
            <Image resizeMode="contain" source={props.placeImage} style={styles.placeImage} />
            <Text>{props.newPlace}</Text>
        </View>
    </TouchableHighlight>
);

const styles= StyleSheet.create({
    listItem:{
        width:"100%",
        padding:10,
        backgroundColor: "#eee",
        flexDirection:"row",
        alignItems:"center"
    },
    placeImage:{
        marginRight:8,
        height:60,
        width:60
    }
});


export default listItem;
