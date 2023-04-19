import { Component } from "react";
import { ContactForm } from "./ContactForm/ContactForm";
export class App extends Component {
  state = {
    contacts: [],
    filter: ''
  }
  render() {
    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm />
      </>
    )
  }
}