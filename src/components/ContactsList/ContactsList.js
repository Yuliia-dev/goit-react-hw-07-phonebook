import { useSelector } from 'react-redux';
import { getFilter } from 'redux/contacts/selectors';
import {
  useGetContactsQuery,
  useDeleteContactsMutation,
} from 'redux/contacts/contacts-api';
import {
  ContactsListStyle,
  ContactsItem,
  ContactsItemText,
  DeleteBtn,
} from './ContactsList.styled';
import Spinner from 'components/Spinner/Spinner';

export default function ContactsList() {
  const [deleteContacts, { isLoading: isDeleting }] =
    useDeleteContactsMutation();
  const filter = useSelector(getFilter);
  const normalizeFilter = filter.toLowerCase();
  const { data, error, isFetching } = useGetContactsQuery({
    skip: filter === '',
  });

  const visibleContacts = data?.filter(contact =>
    contact.name.toLowerCase().includes(normalizeFilter)
  );

  return (
    <>
      <ContactsListStyle>
        {isFetching && <Spinner />}
        {visibleContacts?.map(({ id, name, phone }) => {
          return (
            <ContactsItem key={id}>
              <ContactsItemText>
                {name}: {phone}
              </ContactsItemText>
              <DeleteBtn
                onClick={() => deleteContacts(id)}
                disabled={isDeleting}
              >
                Delete
              </DeleteBtn>
            </ContactsItem>
          );
        })}
        {error && <div> Sorry, contacts not found :( </div>}
      </ContactsListStyle>
    </>
  );
}
