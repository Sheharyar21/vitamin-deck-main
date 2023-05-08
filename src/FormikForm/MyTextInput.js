
import React from 'react';
import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';
import './FormikForm';



const MyTextInput = ({ label, ...props }) => {

    const [field, meta] = useField(props);
    return (
      <>
        <label htmlFor={props.id || props.name}>{label}</label>
        <input className="text-input" {...field} {...props} />
        {meta.touched && meta.error ? (
          <div className="error">{meta.error}</div>
        ) : null}
      </>
    );
  };

export default MyTextInput;