import {ACTIVE_TAB} from '../actions/types';

const initialState ={data:1}

const activeTabReducer = (state = initialState, action) => {
    switch (action.type) {
      case ACTIVE_TAB:
        return {
            ...state,
           data:action.payload 
          }
      default:
        return state
    }
  }
  
  export default activeTabReducer;