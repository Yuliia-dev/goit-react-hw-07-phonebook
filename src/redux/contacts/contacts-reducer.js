import { combineReducers, createReducer } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { addContacts, deleteContacts, filterChange } from './contacts-actions';

// Contacts Reduser

const items = createReducer([], {
  [addContacts]: (state, { payload }) => [...state, payload],
  [deleteContacts]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload),
});

// Filter Reduser

const filter = createReducer('', {
  [filterChange]: (_, { payload }) => payload,
});

const contactsReducer = combineReducers({
  items,
  filter,
});

// Save in localStorage

const persistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['items'],
};

export const persistedContactsReducer = persistReducer(
  persistConfig,
  contactsReducer
);
