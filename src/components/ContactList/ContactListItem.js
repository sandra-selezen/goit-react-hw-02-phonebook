export const ContactListItem = ({ contact: { id, name, number }, onDeleteContact }) => {
  return (
    <>
      <div>
      <span>{name}:</span> <span>{number}</span>
    </div>
    <div>
      <button type="button" onClick={() => onDeleteContact(id)}>Delete</button>
    </div>
    </>
  )
}