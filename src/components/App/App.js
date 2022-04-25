import PhonebookForm from '../PhonebookForm/PhonebookForm';
import Filter from '../Filter/Filter';
import ContactsList from '../ContactsList/ContactsList';
import { Container, TitlePhonebook, TitleContacts } from './App.styled';

export default function App() {
  return (
    <Container>
      <TitlePhonebook>Phonebook</TitlePhonebook>
      <PhonebookForm />
      <TitleContacts>Contacts</TitleContacts>
      <Filter />
      <ContactsList />
    </Container>
  );
}
