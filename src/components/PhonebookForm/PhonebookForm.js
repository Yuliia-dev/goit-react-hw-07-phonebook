import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import {
  useAddContactMutation,
  useGetContactsQuery,
} from 'redux/contacts/contacts-api';
import {
  FormContact,
  LabelFormContact,
  TextFormContact,
  InputFormContact,
  ButtonFormContact,
} from './PhonebookForm.styled';

export default function PhonebookForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const { data } = useGetContactsQuery();

  const [addContact] = useAddContactMutation();

  const submitForm = e => {
    e.preventDefault();
    data.find(contact => contact.name.toLowerCase() === name.toLowerCase())
      ? toast.error(`The name "${name}" is already in the list`, {
          position: 'top-center',
          autoClose: 5000,
        })
      : addContact({ name, phone });

    reset();
  };

  const reset = () => {
    setName('');
    setPhone('');
  };

  return (
    <>
      <ToastContainer position="top-center" />
      <FormContact autoComplete="off" onSubmit={submitForm}>
        <LabelFormContact>
          <TextFormContact>Name</TextFormContact>
          <InputFormContact
            placeholder="Enter a name"
            type="text"
            name="name"
            value={name}
            onChange={e => setName(e.target.value)}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </LabelFormContact>
        <LabelFormContact>
          <TextFormContact>Number</TextFormContact>
          <InputFormContact
            placeholder="Enter a number"
            type="tel"
            name="phone"
            value={phone}
            onChange={e => setPhone(e.target.value)}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </LabelFormContact>
        <ButtonFormContact type="submit">Add contact</ButtonFormContact>
      </FormContact>
    </>
  );
}
