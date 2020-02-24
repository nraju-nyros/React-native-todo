import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { connect } from "react-redux";
import PlaceInput from "./src/components/PlaceInput/PlaceInput";
import PlaceList from "./src/components/PlaceList/PlaceList";
import PlaceDetail from "./src/components/PlaceDetail/PlaceDetail";
import PlaceEdit from "./src/components/PlaceEdit/PlaceEdit";
import img1 from './src/assets/img1.jpg';
import axios from 'axios';

import {
  fetchPlaces,
  addPlace,
  updatePlace,
  deletePlace,
  selectPlace,
  deselectPlace
} from "./src/store/actions/index";

class App extends Component {

  state={
    editForm:false,
    placeName: '',
    id:''
  }

  componentDidMount(){
    this.props.onFetchPlaces();
  }


  placeAddedHandler = placeName => {
    this.props.onAddPlace(placeName);
  };

  placeDeletedHandler = id => {
    this.props.onDeletePlace(id);
  };

  modalClosedHandler = () => {
    this.props.onDeselectPlace();
  };

  placeSelectedHandler = id => {
    this.props.onSelectPlace(id);
  };

  placeEditHandler = (id,placeName) => {
    this.setState({
      editForm:true,
      placeName:placeName,
      id:id
    })
  }

  placeUpdateHandler = (id,placeName) => {
    this.props.onUpdatePlace(id,placeName);
    this.setState({
      editForm:false
    })
  }

  hideEditform = () => {
    this.setState({
      editForm:false
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <PlaceDetail
          selectedPlace={this.props.selectedPlace}
          onItemDeleted={this.placeDeletedHandler}
          onModalClosed={this.modalClosedHandler}
        />
        <PlaceInput onPlaceAdded={this.placeAddedHandler} />
        <PlaceList
          places={this.props.places}
          onItemSelected={this.placeSelectedHandler}

          editForm={this.placeEditHandler}
          onItemDeleted={this.placeDeletedHandler}
        />

        { this.state.editForm? <PlaceEdit id={this.state.id} name={this.state.placeName} onItemUpdate={this.placeUpdateHandler} hideForm={this.hideEditform} /> :null }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 26,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start"
  }
});

const mapStateToProps = state => {
  return {
    places: state.places.places,
    selectedPlace: state.places.selectedPlace
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchPlaces: () => dispatch(fetchPlaces()),
    onAddPlace: name => dispatch(addPlace(name)),
    onUpdatePlace: (id,placeName) => dispatch(updatePlace(id,placeName)),
    onDeletePlace: id => dispatch(deletePlace(id)),
    onSelectPlace: id => dispatch(selectPlace(id)),
    onDeselectPlace: () => dispatch(deselectPlace())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
