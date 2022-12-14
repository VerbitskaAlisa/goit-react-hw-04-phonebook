import { Component } from "react";
import { nanoid } from "nanoid";
import Form from "../Form/Form";
import ContactsList from "../ContactsList/ContactsList";
import Filter from "../Filter/Filter";
import { Container, MainTitle, Title } from './App.styled';


class App extends Component {
    state={
        contacts: [
            {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
            {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
            {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
            {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
        ],
        filter: '',
    }

    addContact = ({ name, number}) => {
        this.setState(prevState => ({
            contacts: [...prevState.contacts, {id: nanoid(), name, number}]
        }))
    }

    deleteContact = contactId => {
      this.setState(prevState => ({
        contacts: prevState.contacts.filter(contact => contact.id !== contactId),
      }))
    }

    changeFilter = e => {
        this.setState({ filter: e.currentTarget.value });
      };

    getFilteredContact = () => {
        const { contacts, filter } = this.state;
        const normalizedFilter = filter.toLowerCase();
        return contacts.filter(({ name }) =>
          name.toLowerCase().includes(normalizedFilter)
        );
      };

    render() {
        const { contacts, filter } = this.state;
        const { addContact, changeFilter, getFilteredContact, deleteContact } = this;
        return (
            <Container>
                <MainTitle>Phonebook</MainTitle>
                <Form onSubmit={addContact} contacts={contacts}/>
                <Title>Contacts</Title>
                <Filter value={filter} onChange={changeFilter}/>
                <ContactsList contacts={getFilteredContact()} onDeleteContact={deleteContact}/>
            </Container>
        )
    }
}

export default App;