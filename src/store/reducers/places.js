import { FETCH_PLACES, ADD_PLACE, UPDATE_PLACE, DELETE_PLACE, SELECT_PLACE, DESELECT_PLACE} from "../actions/actionTypes";
import axios from 'axios';

const initialState = {
  places: [],
  selectedPlace: null
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PLACES:
      return {
        ...state,
        places: action.places    
    };

    case ADD_PLACE:
      return {
        ...state,
        places: action.places    
    };

    case UPDATE_PLACE:
      return {
        ...state,
        places: action.places
      }

    case DELETE_PLACE:
      return {
        ...state,
         selectedPlace: null
      };
    case SELECT_PLACE:
      return {
        ...state,
        selectedPlace: state.places.find(place => {
          return place.id === action.placeId;
        })
      };
    case DESELECT_PLACE:
      return {
        ...state,
        selectedPlace: null
      };
    default:
      return state;
  }
};

export default reducer;
