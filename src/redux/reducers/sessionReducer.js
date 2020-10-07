import {ACTIVE_SESSION} from '../actions/types';

// default active session value is false
const initialState ={active:false}

const sessionReducer = (state = initialState, action) => {
    switch (action.type) {
      case ACTIVE_SESSION:
        return {
            ...state,
            active:action.payload 
          }
      default:
        return state
    }
  }
  
  export default sessionReducer;