export const ContactListItem = ({ contact: { name, number } }) => {
  return (
    <div>
      <span>{name}:</span> <span>{number}</span>
    </div>
  )
}