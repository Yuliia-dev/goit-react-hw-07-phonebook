import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContacts } from 'redux/contacts/contacts-actions';
import { nanoid } from 'nanoid';
import Swal from 'sweetalert2';
import { getContacts } from 'redux/contacts/selectors';
import {
  FormContact,
  LabelFormContact,
  TextFormContact,
  InputFormContact,
  ButtonFormContact,
} from './PhonebookForm.styled';

export default function PhonebookForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const submitForm = e => {
    e.preventDefault();
    const id = nanoid();
    contacts.find(contact => contact.name.toLowerCase() === name)
      ? Swal.fire({
          icon: 'warning',
          title: 'Oops...',
          text: `The name "${name}" is already in the list`,
        })
      : dispatch(addContacts(id, name, number));

    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <>
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
            name="number"
            value={number}
            onChange={e => setNumber(e.target.value)}
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
