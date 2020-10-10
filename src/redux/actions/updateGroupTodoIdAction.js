import {UPDATE_GROUP_TODO_ID} from './types';


export const updateGroupTodoIdAction = (data) => {
  return {
    type: UPDATE_GROUP_TODO_ID,
    payload:data
  }
}