import React, { Component } from "react";
import { Modal, View, Image, Text, Button,TextInput, StyleSheet,FormLabel, FormInput, FormValidationMessage } from "react-native";
import img1 from '../../assets/img1.jpg';



class placeEdit extends Component {
 constructor(props){
  super(props)
 }
  state = {
    placeName: ""
  };

  componentDidMount(){
    this.setState({
      placeName:this.props.name
    })
  }

  placeNameChangedHandler = val => {
    this.setState({
      placeName: val
    });
  };

  placeSubmitHandler = (id,name) => {
    if (this.state.placeName.trim() === "") {
      return alert("Please enter text");
    }
    this.props.onItemUpdate(id,name);
  };

 render(){
  return (
      <View style={styles.modalContainer}>
        <View>
          <Text>Edit Form id:{this.props.id}</Text> 
            <TextInput
              placeholder="An awesome place"
              value={this.state.placeName}
              onChangeText={this.placeNameChangedHandler}
            />
          <Button  title="Update" color="pink" onPress={() => this.placeSubmitHandler(this.props.id, this.state.placeName)} />
          <Button  title="Close" onPress={this.props.hideForm} />
          
        </View>
      </View>
    
  );
  }
};

const styles = StyleSheet.create({
  modalContainer: {
    margin: 22
  },
  placeImage: {
    width: "100%",
    height: 200
  },
  placeName: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 28
  }
});

export default placeEdit;
