import { combineReducers } from 'redux';
import page from './page';
import user from './user';

export default combineReducers({
  page,
  user
});

/* const initialState = {
  name: 'Василий',
  surname: 'Реактов',
  age: 22
};

export default function userstate(state = initialState) {
  return state;
} */
