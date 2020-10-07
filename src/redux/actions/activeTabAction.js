import {ACTIVE_TAB} from './types';


export const activeTabAction = (data) => {
  return {
    type: ACTIVE_TAB,
    payload:data
  }
}