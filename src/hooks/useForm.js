// useForm.js
import { useEffect, useState } from 'react';

function useForm(initialValues, onSubmit, validate) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);
    setIsSubmitting(true);
  };

  // Trigger form submission and reset form state after successful submission
  useEffect(() => {
    if (isSubmitting && Object.keys(errors).length === 0) {
      onSubmit(values);
      setValues(initialValues);
      setIsSubmitting(false);
    }
  }, [errors, initialValues, isSubmitting, onSubmit, values]);

  return { values, errors, handleChange, handleSubmit };
}

export default useForm;
