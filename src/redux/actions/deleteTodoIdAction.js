import {DELETE_TODO_ID} from './types';


export const deleteTodoIdAction = (data) => {
  return {
    type: DELETE_TODO_ID,
    payload:data
  }
}