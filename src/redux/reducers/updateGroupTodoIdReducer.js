import {UPDATE_GROUP_TODO_ID} from '../actions/types';

const initialState ={data:0}

const updateGroupTodoIdReducer = (state = initialState, action) => {
    switch (action.type) {
      case UPDATE_GROUP_TODO_ID:
        return {
            ...state,
           data:action.payload 
          }
      default:
        return state
    }
  }
  
  export default updateGroupTodoIdReducer;