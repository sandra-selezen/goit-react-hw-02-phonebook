import { ContactListItem } from "./ContactListItem";

export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id}>
          <ContactListItem contact={contact} onDeleteContact={onDeleteContact} />
        </li>
      ))}
    </ul>
  )
}