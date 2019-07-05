import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import products from './products'
import userData from './userData'

export default combineReducers({
  form: formReducer,
  products,
  userData,
});