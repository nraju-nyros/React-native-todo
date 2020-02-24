import { FETCH_PLACES, ADD_PLACE, UPDATE_PLACE, DELETE_PLACE, SELECT_PLACE, DESELECT_PLACE } from './actionTypes';
import axios from 'axios';
import ReduxThunk from 'redux-thunk';


   

export const fetchPlaces = () => {
  return dispatch => {
    axios.get('http://localhost:3000/api/v1/todo_lists')
    .then(res => {
      if(res.error) {
        throw(res.error);
      }
      dispatch({type: FETCH_PLACES, places:res.data});
      return res.data;
      console.log("ssssss")
    })
    .catch(error => {
        console.log("error", error)
    })
  }
};


export const addPlace = (placeName) => {
  const data = {
    "name" : placeName
  }

  return dispatch => {
    axios.post('http://localhost:3000/api/v1/todo_lists',data)
    .then(res => {
      if(res.error) {
        throw(res.error);
      }
      dispatch(fetchPlaces());
      return res.data;
    })
    .catch(error => {
        console.log("error", error)
    })
  }
};

export const updatePlace = (id, placeName) => {
  const data = {
    "name" : placeName
  }

  return dispatch => {
    axios.put('http://localhost:3000/api/v1/todo_lists/'+id,data)
    .then(res => {
      if(res.error) {
        throw(res.error);
      }
      dispatch(fetchPlaces());
      return res.data;
    })
    .catch(error => {
        console.log("error", error)
    })
  }
};



export const deletePlace = (id) => {
  alert(id)
  return dispatch => {
    axios.delete('http://localhost:3000/api/v1/todo_lists/'+id)
    .then(res => {
      if(res.error) {
        throw(res.error);
      }
      dispatch(fetchPlaces());
      dispatch(deselectPlace());
    })
    .catch(error => {
        console.log("error", error)
    })
  }
   
};

export const selectPlace = (id) => {
  return {
    type: SELECT_PLACE,
    placeId: id
  };
};

export const deselectPlace = () => {
  return {
    type: DESELECT_PLACE
  };
};