import { useDispatch, useSelector } from 'react-redux';
import { deleteContacts } from 'redux/contacts/contacts-actions';
import { getContacts, getFilter } from 'redux/contacts/selectors';
import {
  ContactsListStyle,
  ContactsItem,
  ContactsItemText,
  ContactsBtn,
} from './ContactsList.styled';

export default function ContactsList() {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const normalizeFilter = filter.toLowerCase();
  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizeFilter)
  );

  return (
    <>
      <ContactsListStyle>
        {visibleContacts.map(({ id, name, number }) => {
          return (
            <ContactsItem key={id}>
              <ContactsItemText>
                {name}: {number}
              </ContactsItemText>
              <ContactsBtn onClick={() => dispatch(deleteContacts(id))}>
                Delete
              </ContactsBtn>
            </ContactsItem>
          );
        })}
      </ContactsListStyle>
    </>
  );
}
