import {DELETE_GROUP_TODO_ID} from './types';


export const deleteGroupTodoIdAction = (data) => {
  return {
    type: DELETE_GROUP_TODO_ID,
    payload:data
  }
}