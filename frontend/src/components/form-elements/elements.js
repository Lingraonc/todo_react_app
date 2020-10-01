import React from "react";
import { Field } from "redux-form";

export function InputField(props) {
  const { name, type, label = "", errors } = props;

  return (
    <>
      <Field
        name={name}
        component={renderField}
        type={type}
        placeholder={label}
      />
      {errors !== null && errors.data.hasOwnProperty(name) ? (
        <p className="field_error">{errors.data[name].message}</p>
      ) : (
        ""
      )}
    </>
  );
}

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <input
      {...input}
      placeholder={label}
      type={type}
      className="form-control w100"
    />

    {touched && error && (
      <span className="text-danger input-error">{error}</span>
    )}
  </div>
);
