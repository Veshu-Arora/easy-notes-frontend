import {ACTIVE_GROUP_SESSION} from './types';


export const groupSessionAction = (data) => {
  return {
    type: ACTIVE_GROUP_SESSION,
    payload:data
  }
}