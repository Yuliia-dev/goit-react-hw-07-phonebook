import { useSelector, useDispatch } from 'react-redux';
import { filterChange } from 'redux/contacts/contacts-actions';
import { getFilter } from 'redux/contacts/selectors';
import { LabelFilter, TextFilter, InputFilter } from './Filter.styled';

export default function Filter() {
  const dispatch = useDispatch();
  const value = useSelector(getFilter);
  return (
    <LabelFilter>
      <TextFilter>Find contact by name</TextFilter>
      <InputFilter
        autoComplete="off"
        placeholder="Enter a name"
        type="text"
        name={value}
        onChange={e => dispatch(filterChange(e.target.value))}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      />
    </LabelFilter>
  );
}
