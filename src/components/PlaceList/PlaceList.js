import React from "react";
import { StyleSheet, FlatList } from "react-native";
import img1 from '../../assets/img1.jpg';
import ListItem from "../ListItem/ListItem";
//  editPageOpen =() => {
//     // this.props.navigation.navigate("Screen");
//     alert("hello")
// }

const placeList = props => {
 


  
  return (
    <FlatList
      keyExtractor={(item, index) => index.toString()}
      style={styles.listContainer}
      data={props.places}
      renderItem={(info) => (
        <ListItem
          placeName={info.item.name}
          placeImage={img1}
          onItemPressed={() => props.onItemSelected(info.item.id)}
          onItemDestroy={() => props.onItemDeleted(info.item.id)}
          
          editPage={() => props.editForm(info.item.id, info.item.name)}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    width: "100%"
  }
});

export default placeList;
