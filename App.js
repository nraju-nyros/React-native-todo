/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React from 'react';
import {View,TextInput,Button,StyleSheet} from 'react-native';
import PlaceInput from './src/components/PlaceInput/PlaceInput';
import PlaceList from './src/components/PlaceList/PlaceList';
import img1 from './src/assets/img1.jpg';
import PlaceDetail from './src/components/PlaceDetail/PlaceDetail';


export default class App extends React.Component{

  state={
    places:[]
  }

  placenameChangedHandler = val => {
    this.setState({
      placeName: val,
      selectedPlace:null
    })
  }

  placeAddedHandler = placeName => {  
    this.setState(prevState => {
      return {
        places:prevState.places.concat({
          key:Math.random(), name:placeName,image:img1

        })
      };
    })
  }

  placeDeletedHandler = () =>{
    this.setState(prevState => {
      return{
        places: prevState.places.filter(place => {
          return place.key !== prevState.selectedPlace.key;
        }),

        selectedPlace:null
      }
    });
  }

  modalClosedHandler = () => {
    this.setState({
      selectedPlace:null
    });
  }
  

  placeSeletedHandler = key => {
    this.setState(prevState =>{
      return{
        selectedPlace: prevState.places.find(place =>{
          return place.key === key;
        })
      };
    })
  }

  render(){
    return (
      <View style={styles.container}>
        <PlaceDetail 
          selectedPlace={this.state.selectedPlace}
          onItemDeleted={this.placeDeletedHandler} 
          onModalClosed={this.modalClosedHandler}/>
        <PlaceInput onPlaceAdded={this.placeAddedHandler}/>
        <PlaceList 
          places={this.state.places}
          onItemSeleted={this.placeSeletedHandler}
        />
      </View>
    );
 }
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:"#fff",
    padding:26,
    alignItems: "center",
    justifyContent: "flex-start"
  }

});

// export default App;
