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


const rootReducer = combineReducers ({
    userReducer : userReducer,
    activeTabReducer : activeTabReducer,
    personalTodosReducer : personalTodosReducer,
    updateTodoIdReducer : updateTodoIdReducer,
    deleteTodoIdReducer : deleteTodoIdReducer,
    sessionReducer : sessionReducer,
    groupIdReducer : groupIdReducer,
    groupInfoReducer : groupInfoReducer,
    groupTodosReducer : groupTodosReducer
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
      "groupTodosReducer"
    ]
  }

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(persistedReducer)
export const persistor = persistStore(store)


