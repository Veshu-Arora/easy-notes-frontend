import {ACTIVE_GROUP_SESSION} from '../actions/types';

// default active session value is false
const initialState ={active:false}

const groupSessionReducer = (state = initialState, action) => {
    switch (action.type) {
      case ACTIVE_GROUP_SESSION:
        return {
            ...state,
            active:action.payload 
          }
      default:
        return state
    }
  }
  
  export default groupSessionReducer;