import {PERSONAL_TODOS} from './types';


export const personalTodosAction = (data) => {
  return {
    type: PERSONAL_TODOS,
    payload:data
  }
}