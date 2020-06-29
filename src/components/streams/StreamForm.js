import React from 'react';
import { Field, reduxForm } from 'redux-form';

const renderInput = ({ input, label, meta }) => {
  const className = `field ${meta.touched && meta.error && 'error'}`;
  return (
    <div className={className}>
      <label htmlFor={input.name}>{label}</label>
      <input {...input} autoComplete="off" />
      {meta.touched && meta.error ? (
        <div className="ui error message">
          <div className="header">{meta.touched && meta.error}</div>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};


const StreamForm = (props) => {
  const onSubmit = (formValues) => {
    props.onSubmit(formValues); 
  };
  
  return (
    <div>
      <form className="ui form error" onSubmit={props.handleSubmit(onSubmit)}>
        <Field name="title" component={renderInput} label="Enter Title" />
        <Field
          name="description"
          component={renderInput}
          label="Enter Description"
        />
        <button className="ui primary button">Submit</button>
      </form>
    </div>
  );
};

const validate = (formValues) => {
  const errors = {};
  if (!formValues.title) {
    errors.title = 'You must enter a title';
  }

  if (!formValues.description) {
    errors.description = 'You must enter a description';
  }
  return errors;
};

export default reduxForm({
  form: 'streamForm',
  validate,
})(StreamForm);

