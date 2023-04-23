import { ContactListItem } from "./ContactListItem";
import { List } from "./ContactList.styled";
import { Item } from "./ContactListItem.styled";

export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <List>
      {contacts.map(contact => (
        <Item key={contact.id}>
          <ContactListItem contact={contact} onDeleteContact={onDeleteContact} />
        </Item>
      ))}
    </List>
  )
}