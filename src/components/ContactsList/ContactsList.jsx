import ContactItem from "../ContactItem/ContactItem";
import PropTypes from 'prop-types';
import { Item, List } from "./ContactsList.styled";

const ContactsList = ({ contacts, onDeleteContact }) => {
   return (<List>
      {contacts.map(({ id, name, number }) => {
        return (
            <Item key={id} >
            <ContactItem id={id}
                         name={name} 
                         number={number}
                         onDeleteContact={onDeleteContact}/>
            </Item>
        )
      })}
   </List>
    )
}

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ContactsList;

