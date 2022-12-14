import PropTypes from 'prop-types';
import { DeleteBtn, NameText, NumberText } from './ContactItem.styled';


const ContactItem = ({id, name, number, onDeleteContact}) => {
    return (
                <>
                <NameText>{name}</NameText>
                <NumberText>{number}</NumberText>
                <DeleteBtn type="button" onClick={() => onDeleteContact(id)}>Delete</DeleteBtn>
                </>
            )
}

ContactItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    onDeleteContact: PropTypes.func.isRequired,
}


export default ContactItem;