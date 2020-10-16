import {DELETE_GROUP_TODO_ID} from '../actions/types';

const initialState ={data:0}

const deleteGroupTodoIdReducer = (state = initialState, action) => {
    console.log("delete group todo reducer ka data JO id SEND KARTA H: ", action.payload);
    switch (action.type) {
      case DELETE_GROUP_TODO_ID:
        return {
            ...state,
           data:action.payload 
          }
      default:
        return state
    }
  }
  
  export default deleteGroupTodoIdReducer;