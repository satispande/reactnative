import React from 'react';
import { StyleSheet, View,TextInput,Button,ScrollView} from 'react-native';

import PlaceInput from "./src/component/PlaceInput/PlaceInput";
import PlaceList from "./src/component/PlaceList/PlaceList";

import PlaceDetail  from "./src/component/PlaceDetail/PlaceDetail";
export default class App extends React.Component {

  state={
    places:[],
    selectedPlace:null
  }


  placeAddedHandler = placeName => {
    this.setState(prevState => {
      return {
        places: prevState.places.concat({
          key: Math.random(),
          name: placeName,
          image: {
            uri :"http://imshopping.rediff.com/imgshop/100-100/shopping/pixs/32143/s/st-si-001002.jpg"
          }
        })
      };
    });
  };

  placeDeletedHandler = key => {
    this.setState(prevState => {
      return {
        places: prevState.places.filter(place => {
          return place.key !== prevState.selectedPlace.key;
        })
        ,
            selectedPlace:null
      };
    });
  };

  
  placeSelectedHandler = key => {
    this.setState(
      prevState => {
        return {
          selectedPlace:prevState.places.find(
            place =>{
              return place.key === key  ;
            })
        };
      });
    
    // this.setState(prevState => {
    //   return {
    //     places: prevState.places.filter(place => {
    //       return place.key !== key;
    //     })
    //   };
    // });
  };

  
  
  
  modalClosedHandler=()=>{
    this.setState({
      selectedPlace:null
    });
    
  }
  render() {

    return (
      <View style={styles.container}>
        <PlaceDetail selectedPlace={this.state.selectedPlace} onItemDeleted={this.placeDeletedHandler} onModalClosed={this.modalClosedHandler}/>
        <PlaceInput onPlaceAdded={this.placeAddedHandler} />
        <PlaceList
          places={this.state.places}
          onItemSelected={this.placeSelectedHandler}
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
