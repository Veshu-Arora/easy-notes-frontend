import {GROUP_INFO} from '../actions/types';

const initialState ={}

const groupInfoReducer = (state = initialState, action) => {
  // console.log("GROUP INFO REDUCER KA DATA", action.payload);
    switch (action.type) {
      case GROUP_INFO:
        return {
            ...state,
           data:action.payload 
          }
      default:
        return state
    }
  }
  
  export default groupInfoReducer;