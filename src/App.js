import React, { Component } from 'react';
import { nanoid } from 'nanoid';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  nameInputId = nanoid();

  handleChange = event => {
    console.log(event.currentTarget.name);
    console.log(event.currentTarget.value);

    const { name, value } = event.currentTarget;

    this.setState({
      [name]: value,
    });
  };

  addContact = event => {
    const { contacts, name, value } = event.currentTarget;
    this.setState({
      [contacts]: value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);

    this.reset();
  };

  reset = () => {
    this.setState({ name: '' });
  };

  /* formSubmitHandler = data => {
    setTimeout(() => {
      console.log(data);
    }, 1000);
  };
 */
  render() {
    const { contacts, name } = this.state;
    return (
      <>
        <h2>Phonebook</h2>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor={this.nameInputId}>Name</label>
          <input
            type="text"
            name="name"
            value={name}
            htmlFor={this.nameInputId}
            onChange={this.handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />

          <button type="submit">Add contact</button>
        </form>
        <h2>Contacts</h2>
        <ul>
          {this.state.contacts.map(contact => {
            console.log(contact);
            return <li key={contact.id}>{contact.name}</li>;
          })}
        </ul>
      </>
    );
  }
}
{
  /*  */
}

export default App;

/* 
npm install --save nanoid
import './polyfills.js'
import { nanoid } from 'nanoid'

function Todos({todos}) {
  return (
    <ul>
      {todos.map(todo => (
        <li key={nanoid()}> 
          {todo.text}
        </li>
      ))}
    </ul>
  )
}
 */