import React from 'react';
import { StyleSheet, View,TextInput,Button,ScrollView} from 'react-native';

import PlaceInput from "./src/component/PlaceInput/PlaceInput";
import PlaceList from "./src/component/PlaceList/PlaceList";

import placeImage from "./assets/food1.jpg"

export default class App extends React.Component {

  state={
    places:[]
  }


  placeAddedHandler = placeName => {
    this.setState(prevState => {
      return {
        places: prevState.places.concat({
          key: Math.random(),
          name: placeName,
          image:placeImage
        })
      };
    });
  };

  placeDeletedHandler = key => {
    this.setState(prevState => {
      return {
        places: prevState.places.filter(place => {
          return place.key !== key;
        })
      };
    });
  };

  

  render() {

    return (
      <View style={styles.container}>
        <PlaceInput onPlaceAdded={this.placeAddedHandler} />
        <PlaceList
          places={this.state.places}
          onItemDeleted={this.placeDeletedHandler}
        />
      </View>
      
    );
  }
}

//https://github.com/vhpoet/react-native-styling-cheat-sheet


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 26,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start"
  }
});
