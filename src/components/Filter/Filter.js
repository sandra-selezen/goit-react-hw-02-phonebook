// import { Formik, Field } from 'formik';
// import * as yup from 'yup';
// import { nanoid } from 'nanoid';
import { SearchLabel } from './Filter.styled';
import { RiUserSearchFill } from "react-icons/ri";

// let schema = yup.string();
// const searchId = nanoid();
// let initialValues = "";

export const Filter = ({ value, onChange }) => {
  return (
    // <Formik initialValues={initialValues} value={value} onChange={onChange} validationSchema={schema}>
    <>
      <SearchLabel htmlFor="1"><RiUserSearchFill /> Find contact by name </SearchLabel>
      <input value={value} onChange={onChange} id="1"/>
    </>

  )
}