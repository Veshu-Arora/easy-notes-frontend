import {GROUP_TODOS} from './types';


export const groupTodosAction = (data) => {
  return {
    type: GROUP_TODOS,
    payload:data
  }
}