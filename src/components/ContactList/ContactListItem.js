export const ContactListItem = ({ contact: { name, number } }) => {
  return (
    <>
      {name}: {number}
    </>
  )
}