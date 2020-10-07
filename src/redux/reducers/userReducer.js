import {USER_INFO} from '../actions/types';

const initialState ={}

const userReducer = (state = initialState, action) => {
  // console.log("User reducer ka data jo pahle JBSHCSCBJSCB se print ho rha h", action.payload);
    switch (action.type) {
      case USER_INFO:
        return {
            ...state,
           data:action.payload 
          }
      default:
        return state
    }
  }
  
  export default userReducer;