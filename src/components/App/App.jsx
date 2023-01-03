import { nanoid } from "nanoid";
import Form from "../Form/Form";
import useLocalStorage from "hooks/useLocalStorage";
import ContactsList from "../ContactsList/ContactsList";
import Filter from "../Filter/Filter";
import { Container, MainTitle, Title, OpenModalBtn } from './App.styled';
import ModalWindow from "components/Modal/Modal";
import { useState } from "react";

function App () {
  const [contacts, setContacts] = useLocalStorage('contacts', [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
                                            ]);
  const[filter, setFilter] = useState('');
  const [showModal, setShowModal] = useState(false);                                          

  const addContact = ({ name, number}) => {
    setContacts(prevState => [...prevState, {id: nanoid(), name, number}])
    toggleModal();
};
   const toggleModal = () => {
    setShowModal(!showModal)
};
   const deleteContact = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId)
    )
};
   const changeFilter = e => {
    setFilter(e.currentTarget.value);
};
    const getFilteredContact = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };

  return <Container>
             <MainTitle>Phonebook</MainTitle>
             <OpenModalBtn onClick={toggleModal}>Add</OpenModalBtn>
             <Title>Contacts</Title>
             <Filter value={filter} onChange={changeFilter}/>
             <ContactsList contacts={getFilteredContact()} onDeleteContact={deleteContact}/>
             {showModal && <ModalWindow onClose={toggleModal}><Form onSubmit={addContact} contacts={contacts}/></ModalWindow>}
             </Container>
}

// class App extends Component {
//     state={
        // contacts: [
        //     {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
        //     {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
        //     {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
        //     {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
        // ],
//         filter: '',
//         showModal: false,
//     }

    // addContact = ({ name, number}) => {
    //     this.setState(prevState => ({
    //         contacts: [...prevState.contacts, {id: nanoid(), name, number}]
    //     }))

    //     this.toggleModal();
    // }

    // deleteContact = contactId => {
    //   this.setState(prevState => ({
    //     contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    //   }))
    // }

    // changeFilter = e => {
    //     this.setState({ filter: e.currentTarget.value });
    //   };

    // getFilteredContact = () => {
    //     const { contacts, filter } = this.state;
    //     const normalizedFilter = filter.toLowerCase();
    //     return contacts.filter(({ name }) =>
    //       name.toLowerCase().includes(normalizedFilter)
    //     );
    //   };

//       componentDidMount () {
//         const contacts = localStorage.getItem("contacts");
//         const parsedContacts = JSON.parse(contacts);
        
//         if (parsedContacts) {
//           this.setState({contacts: parsedContacts});
//         }
//       }

//       componentDidUpdate (prevState) {
//         if(this.state.contacts !== prevState.contacts) {
//           localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
//         }
//       }

      // toggleModal = () => {
      //   this.setState(({showModal}) => ({
      //     showModal: !showModal,
      //   }))
      // }

//     render() {
//         const { contacts, filter, showModal } = this.state;
//         const { addContact, changeFilter, getFilteredContact, deleteContact, toggleModal } = this;
//         return (
//             <Container>
//                 <MainTitle>Phonebook</MainTitle>
//                 <OpenModalBtn onClick={toggleModal}>Add</OpenModalBtn>
//                 <Title>Contacts</Title>
//                 <Filter value={filter} onChange={changeFilter}/>
//                 <ContactsList contacts={getFilteredContact()} onDeleteContact={deleteContact}/>
//                 {showModal && <ModalWindow onClose={toggleModal}><Form onSubmit={addContact} contacts={contacts}/></ModalWindow>}
//             </Container>
//         )
//     }
// }

export default App;