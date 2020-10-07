import {GROUP_TODOS} from '../actions/types';

const initialState ={data:0}

const groupTodosReducer = (state = initialState, action) => {
  console.log("PUBLIC GROUP K TODOS JO REDUCER ME HAIN", action.payload);
    switch (action.type) {
      case GROUP_TODOS:
        return {
            ...state,
           data:action.payload 
          }
      default:
        return state
    }
  }
  
  export default groupTodosReducer;