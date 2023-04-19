export const ContactListItem = ({ contact: { name, number } }) => {
  return (
    <>
      <span>{name}:</span> <span>{number}</span>
    </>
  )
}