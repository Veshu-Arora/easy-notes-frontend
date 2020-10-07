import {PERSONAL_TODOS} from '../actions/types';

const initialState ={data:0}

const personalTodosReducer = (state = initialState, action) => {
    switch (action.type) {
      case PERSONAL_TODOS:
        return {
            ...state,
           data:action.payload 
          }
      default:
        return state
    }
  }
  
  export default personalTodosReducer;