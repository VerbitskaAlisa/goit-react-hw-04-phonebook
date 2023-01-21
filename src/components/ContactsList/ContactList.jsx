import ContactItem from "../ContactItem/ContactItem";
import { Item, List } from "./ContactsList.styled";
import { useSelector } from "react-redux";
import { getContacts, getFilter } from "redux/selectors";

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filterValue = useSelector(getFilter);

  console.log(contacts)
 
  
  const getFilteredContacts = () => {
    const normalizedFilter = filterValue.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };

   return (<List>
      {getFilteredContacts().map(({ id, name, number }) => {
        return (
            <Item key={id} >
            <ContactItem id={id}
                         name={name} 
                         number={number}
                        />
            </Item>
        )
      })}
   </List>
    )
}

export default ContactList;

