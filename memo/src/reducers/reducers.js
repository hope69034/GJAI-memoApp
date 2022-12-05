	
import { combineReducers } from 'redux';
import loadReducer from './loadReducer';
import sendReducer from './sendReducer';
import delReducer from './delReducer';
 
export default combineReducers({
  loadReducer,
  sendReducer,
  delReducer
});