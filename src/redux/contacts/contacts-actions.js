import { createAction } from '@reduxjs/toolkit';

export const addContacts = createAction('contacts/add', (id, name, number) => {
  return {
    payload: {
      id,
      name,
      number,
    },
  };
});

export const deleteContacts = createAction('contacts/delete');

export const filterChange = createAction('filter/change');
