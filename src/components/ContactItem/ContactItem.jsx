import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContacts } from 'redux/contactsSlice';
import { DeleteBtn, NameText, NumberText } from './ContactItem.styled';


const ContactItem = ({id, name, number}) => {
    const dispatch = useDispatch();

    const deleteContact = contactId => {
        dispatch(deleteContacts(contactId));
    }


    return (
                <>
                <NameText>{name}</NameText>
                <NumberText>{number}</NumberText>
                <DeleteBtn type="button" onClick={() => deleteContact(id)}>Delete</DeleteBtn>
                </>
            )
}

ContactItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
}


export default ContactItem;