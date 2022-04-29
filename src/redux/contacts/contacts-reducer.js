import { combineReducers, createReducer } from '@reduxjs/toolkit';
import { filterChange } from './contacts-actions';

const filter = createReducer('', {
  [filterChange]: (_, { payload }) => payload,
});

export const contactsReducer = combineReducers({
  filter,
});
