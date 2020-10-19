import { createStore, combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults for localStorage for web

import userReducer from './reducers/userReducer';
import activeTabReducer from './reducers/activeTabReducer';
import personalTodosReducer from './reducers/personalTodosReducer';
import updateTodoIdReducer from './reducers/updateTodoIdReducer';
import deleteTodoIdReducer from './reducers/deleteTodoIdReducer';
import sessionReducer from './reducers/sessionReducer';
import groupIdReducer from './reducers/groupIdReducer';
import groupInfoReducer from './reducers/groupInfoReducer';
import groupTodosReducer from './reducers/groupTodosReducer';
import updateGroupTodoIdReducer from './reducers/updateGroupTodoIdReducer';
import groupSessionReducer from '../redux/reducers/groupSessionReducer';
import deleteGroupTodoIdReducer from '../redux/reducers/deleteGroupTodoIdReducer';
import {LOG_OUT} from './actions/types';


const rootReducer = combineReducers ({
    userReducer : userReducer,
    activeTabReducer : activeTabReducer,
    personalTodosReducer : personalTodosReducer,
    updateTodoIdReducer : updateTodoIdReducer,
    deleteTodoIdReducer : deleteTodoIdReducer,
    sessionReducer : sessionReducer,
    groupIdReducer : groupIdReducer,
    groupInfoReducer : groupInfoReducer,
    groupTodosReducer : groupTodosReducer,
    updateGroupTodoIdReducer : updateGroupTodoIdReducer,
    groupSessionReducer : groupSessionReducer,
    deleteGroupTodoIdReducer : deleteGroupTodoIdReducer
})

const persistConfig = {
  key: 'root',
  storage,
  whitelist:[
    "userReducer",
    "activeTabReducer",
    "personalTodosReducer",
    "updateTodoIdReducer",
    "deleteTodoIdReducer",
    "sessionReducer",
    "groupIdReducer",
    "groupInfoReducer",
    "groupTodosReducer",
    "updateGroupTodoIdReducer",
    "groupSessionReducer",
    "deleteGroupTodoIdReducer"
  ]
}


const logoutReducer = ( state, action ) => {
  if ( action.type === LOG_OUT ) {
    state = undefined;
  }
      
  return rootReducer(state, action)
}



const persistedReducer = persistReducer(persistConfig, logoutReducer)

export const store = createStore(persistedReducer)
export const persistor = persistStore(store)


