import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/contacts/contactsSelectors';
import ContactListElement from './ContactListElement/ContactListElement';
import PropTypes from 'prop-types';
import style from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const normalizedFilter = filter.toLowerCase();
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <ul className={style.ContactList__list}>
      {filteredContacts.map(({ id, name, number }) => (
        <ContactListElement key={id} id={id} name={name} number={number} />
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

export default ContactList;
