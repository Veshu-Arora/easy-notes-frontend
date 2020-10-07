import {ACTIVE_SESSION} from './types';


export const sessionAction = (data) => {
  return {
    type: ACTIVE_SESSION,
    payload:data
  }
}