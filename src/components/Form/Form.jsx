import { Component } from "react";
import PropTypes from 'prop-types';
import { Label, Input, Wrap, AddButton } from './Form.styled'

class Form extends Component {
    static defaultProps = {
        onSubmit: PropTypes.func.isRequired,
        contact: PropTypes.arrayOf(
          PropTypes.shape({
            id: PropTypes.string,
            name: PropTypes.string,
            number: PropTypes.string,
          })
        ).isRequired,
      };

   state={
        name: "",
        number: "",
   }

   handleInputChange = e => {
    const {name, value} = e.currentTarget;
    this.setState({[name]: value});
    }

    handleSubmit = e => {
        const { contacts } = this.props;
        const { name } = this.state;
        e.preventDefault();

        if (contacts.find(contact => contact.name === name)) {
               return alert(`${name} is is already in contacts.`);
        } else {
         this.props.onSubmit(this.state);
         this.reset();
    }
    }
     
    reset = () => {
        this.setState({
            name: "",
            number: "",
        })
    }

   render () {
    return (
        <form onSubmit={this.handleSubmit}>
            <Wrap>
                <Label>
                    Name
                    <Input type="text" 
                           name="name"
                           pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                           title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                           onChange={this.handleInputChange}
                           value={this.state.name}
                           required />
                </Label>
                <Label>
                    Number
                    <Input type="tel" 
                           name="number" 
                           pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                           title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                           required
                           value={this.state.number}
                           onChange={this.handleInputChange}/>
                </Label>
                </Wrap>
                <AddButton type="submit">Add contact</AddButton>
            </form>
    )
   }
}

export default Form;