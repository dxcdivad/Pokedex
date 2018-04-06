import { combineReducers } from 'redux';
import listReducer from './List/listReducer';


const rootReducer = combineReducers({
  list: listReducer
})

export default rootReducer;