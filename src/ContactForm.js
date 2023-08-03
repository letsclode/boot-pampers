import React from 'react';
import useForm from './hooks/useForm';


function ContactForm() {
  const initialValues = {
    name: '',
    email: '',
    message: '',
  };

  const onSubmit = (values) => {
    // Handle form submission logic (e.g., send data to backend)
    console.log('Submitted form:', values);
  };

  const validate = (values) => {
    // Add form validation logic here
    const errors = {};

    if (!values.name) {
      errors.name = 'Name is required';
    }

    if (!values.email) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      errors.email = 'Invalid email format';
    }

    if (!values.message) {
      errors.message = 'Message is required';
    }

    return errors;
  };

  const { values, errors, handleChange, handleSubmit } = useForm(
    initialValues,
    onSubmit,
    validate
  );

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={values.name}
          onChange={handleChange}
        />
        {errors.name && <p>{errors.name}</p>}
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
        />
        {errors.email && <p>{errors.email}</p>}
      </div>
      <div>
        <label>Message:</label>
        <textarea
          name="message"
          value={values.message}
          onChange={handleChange}
        />
        {errors.message && <p>{errors.message}</p>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default ContactForm;
