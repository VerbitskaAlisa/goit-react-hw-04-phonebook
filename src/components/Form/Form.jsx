import { nanoid } from "nanoid";
import { useState } from "react";
import { Label, Input, Wrap, AddButton, InputField } from './Form.styled';
import { useDispatch, useSelector } from "react-redux";
import { getContacts } from "redux/selectors";
import { addContacts } from "redux/contactsSlice";

export default function Form ({ showModal }) {
     const [name, setName] = useState('');
     const [number, setNumber] = useState('');

     const contacts = useSelector(getContacts);
     const dispatch = useDispatch();

     const handleInputChange = e => {
        const {name, value} = e.currentTarget;
        switch(name) {
            case 'name':
                setName(value)
                break;
                case 'number':
                    setNumber(value)
                    break;    
             default:
                throw new Error(`Unexeptable name - ${name}`)
        }}
       const handleSubmit = e => {
            e.preventDefault();
    
            if (contacts.find(contact => contact.name === name)) {
                   return alert(`${name} is is already in contacts.`);
            } else {
             dispatch(addContacts({id: nanoid(), name, number}));
             showModal();
             reset();
        }
        }
         
        const reset = () => {
           setName('');
           setNumber('');
        }  

    return <form onSubmit={handleSubmit}>
    <Wrap>  
            <InputField>
            <Label htmlFor="name">Name</Label>
            <Input type="text"
                   id="name" 
                   name="name"
                   pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                   title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                   onChange={handleInputChange}
                   value={name}
                   required />
            </InputField>
            <InputField>
            <Label htmlFor="number">Number</Label>
            <Input type="tel" 
                   name="number" 
                   id='number'
                   pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                   title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                   required
                   value={number}
                   onChange={handleInputChange}/>
            </InputField>
            
        </Wrap>
        <AddButton type="submit">Add contact</AddButton>
    </form>
}