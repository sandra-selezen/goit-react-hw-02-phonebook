import { Component } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { nanoid } from 'nanoid';
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

const initialValues = {
  name: "",
  number: ""
}

export class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  }

  nameId = nanoid();
  numberId = nanoid();

  handleSubmit = (values, { resetForm }) => {
    this.setState(values);
    this.props.onSubmit({ ...values, id: nanoid() }); 
    resetForm();
  };

  render() {
    return (
      <Formik initialValues={initialValues} validationSchema={schema} onSubmit={this.handleSubmit}>
        <Form>
          <label htmlFor={this.numberId}>Name</label>
          <div>
            <Field name="name" id={this.numberId} placeholder="Enter contact name" />
            <FormError name="name" />
          </div>
          <label htmlFor={this.numberId}>Number</label>
          <div>
            <Field type="tel" name="number" id={this.numberId} placeholder="Enter contact phone number" />
            <FormError name="number" />
          </div>
          
          <button type="submit">Add contact</button>
        </Form>
      </Formik>
    )
  }
}