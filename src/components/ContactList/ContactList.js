import { ContactListItem } from "./ContactListItem";

export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id}>
          <ContactListItem contact={contact} />
          <div>
            <button type="button" onClick={() => onDeleteContact(contact.id)}>Delete</button>
          </div>
        </li>
      ))}
    </ul>
  )
}