import React from 'react';
import { View,Text,TextInput,Button,StyleSheet, TouchableOpacity, Image } from 'react-native';
import axios from 'axios';

const listItem = props => {
    return(
	   	<TouchableOpacity onPress={props.onItemPressed}>
			<View style={styles.listItem}>
			  <Image resizeMode="contain" source={props.placeImage} style={styles.placeImage}/>
				<Text>{props.placeName}</Text>
				<View style={styles.buttons}>
					<Button title="Edit" color="green" style={styles.button1} onPress={props.editPage}></Button>
					<Button title="Delete" color="red" onPress={props.onItemDestroy}></Button>
			    </View>
			</View>
		</TouchableOpacity>
   	)
  
};

// onPress={props.onPlaceUpdate}

const styles = StyleSheet.create({
	listItem:{
		width:'100%',
		padding:10,  
		marginBottom:10,
		backgroundColor:"#eee",
		flexDirection:'row',
		alignItems:'center'
	},
	placeImage:{
		marginRight:8,
		height:50,
		width:50
	},
	buttons:{
		textAlign:'right',
		flex:1,
		flexDirection:'row',
		justifyContent:'flex-end'
		
	},
	button1:{
		margin:20
	}
});


export default listItem;