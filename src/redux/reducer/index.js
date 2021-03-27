import { combineReducers } from 'redux';
import { sidebarReducer } from './sidebar';
import { userReducer } from './user';

export default combineReducers({ sidebar: sidebarReducer, users: userReducer });
