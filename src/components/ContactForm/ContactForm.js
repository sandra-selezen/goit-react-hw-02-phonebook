import { Component } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import styled from 'styled-components';

const ErrorText = styled.p`
  color: red;
`;

const FormError = ({ name }) => {
  return (
    <ErrorMessage
      name={name}
      render={message => <ErrorText>{message}</ErrorText>}
    />
  );
};

const schema = yup.object().shape({
  name: yup.string().required(),
  number: yup.string().required()
});

export class ContactForm extends Component {
  state = {
    name: "",
    number: ""
  }

  handleSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  };

  render() {
    return (
      <Formik initialValues={this.state} validationSchema={schema} onSubmit={this.handleSubmit}>
        <Form>
          <label htmlFor="name">Name</label>
          <div>
            <Field type="text" name="name" placeholder="Enter contact name" />
            <FormError name="name" />
          </div>
          <label htmlFor="number">Number</label>
          <div>
            <Field type="tel" name="number" placeholder="Enter contact phone number" />
            <FormError name="number" />
          </div>
          
          <button type="submit">Add contact</button>
        </Form>
      </Formik>
    )
  }
}