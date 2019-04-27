import React from 'react';
import { StyleSheet, Text, View,TextInput,Button,ScrollView} from 'react-native';
import ListItem from './src/component/ListItem/ListItem';

export default class App extends React.Component {

  state={
    placeName:'',
    places:[]
  }

  placeNameChangeHandler= val =>{
    this.setState({
      placeName:val
    })
  }

  placeSubmitHandler =()=>{
    if(this.state.placeName.trim()===""){
      return;
    }
    this.setState(
      prevState => {
        return {
          places:prevState.places.concat(prevState.placeName)
        }
      }
    );
    this.setState({
      placeName:''
    })

  }
  render() {
    const placesOutput=this.state.places.map(
      (place,i)=>(
        <ListItem key={i} newPlace={place} 
        onItemPressed={()=> alert('Item pressed -ID: '+i)} />
      )
    );
    return (
      <ScrollView style={styles.container}>
        <View style={styles.inputStyle}>
          <TextInput   
            style={styles.placeInput}
            placeholder="awesome place"
            value={this.state.placeName} 
            onChangeText={this.placeNameChangeHandler}
          />     
          <Button title="Add" style={styles.placeButton} onPress={this.placeSubmitHandler}/>
        </View>
        <View>
          {placesOutput}
        </View>
      </ScrollView>
      
    );
  }
}

//https://github.com/vhpoet/react-native-styling-cheat-sheet
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:20,
    backgroundColor: '#fff',
   // alignItems: 'center',
   // justifyContent: 'flex-start',
  },
  inputStyle:{
   // flex: 1,
   width:"100%",
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center"
  },
  placeInput:{
    width:"70%",
    borderColor:"black",borderWidth:1
  },
  placeButton:{
    width:"30%"
  }
});
