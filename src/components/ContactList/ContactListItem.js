import { RiUserUnfollowFill } from 'react-icons/ri';
import { DeleteBtn } from './ContactListItem.styled';

export const ContactListItem = ({ contact: { id, name, number }, onDeleteContact }) => {
  return (
    <>
      <div>
        <span>{name}:</span> <span>{number}</span>
      </div>
      <div>
        <DeleteBtn aria-label='Delete' type="button" onClick={() => onDeleteContact(id)}><RiUserUnfollowFill /></DeleteBtn>
      </div>
    </>
  )
}