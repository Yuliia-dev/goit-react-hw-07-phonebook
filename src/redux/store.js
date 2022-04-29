import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { contactsReducer } from './contacts/contacts-reducer';
import { contactsApi } from './contacts/contacts-api';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactsApi.middleware,
  ],
});

setupListeners(store.dispatch);
