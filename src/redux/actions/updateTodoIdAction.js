import {UPDATE_TODO_ID} from './types';


export const updateTodoIdAction = (data) => {
  return {
    type: UPDATE_TODO_ID,
    payload:data
  }
}