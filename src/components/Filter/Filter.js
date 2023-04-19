// import { Formik, Field } from 'formik';
// import * as yup from 'yup';
// import { nanoid } from 'nanoid';


// let schema = yup.string();
// const searchId = nanoid();
// let initialValues = "";

export const Filter = ({ value, onChange }) => {
  return (
    // <Formik initialValues={initialValues} value={value} onChange={onChange} validationSchema={schema}>
    <>
      <label htmlFor="1">Find contact by name </label>
      <input value={value} onChange={onChange} id="1"/>
    </>

  )
}