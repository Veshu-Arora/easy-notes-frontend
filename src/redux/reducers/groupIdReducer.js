import {GROUP_ID} from '../actions/types';

const initialState ={data:0}

const groupIdReducer = (state = initialState, action) => {
    console.log("GROUP ID reducer ka data JO GROUP KI id SEND KARTA H: ", action.payload);
    switch (action.type) {
      case GROUP_ID:
        return {
            ...state,
           data:action.payload 
          }
      default:
        return state
    }
  }
  
  export default groupIdReducer;