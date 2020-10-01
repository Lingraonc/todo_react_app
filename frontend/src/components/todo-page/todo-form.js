import React from "react";
import { reduxForm } from "redux-form";
import { InputField } from "../form-elements/elements";
import { isRequired } from "../form-validations/validations";

const validate = (values) => {
  const errors = {};
  errors.text = isRequired(values.text);

  return errors;
};

let TodoForm = (props) => {
  const { handleSubmit, buttonLabel, errors = null } = props;
  return (
    <form
      onSubmit={handleSubmit}
      className="d-flex justify-content-between align-items-top"
    >
      <div className="inputs-container">
        <InputField
          name="_id"
          component="input"
          type="hidden"
          errors={errors}
        />
        <InputField
          name="text"
          component="input"
          type="text"
          label="Todo input"
          errors={errors}
        />
      </div>

      <span className="text-right">
        <button className="btn btn-success ml-1 mr-1" type="submit">
          {buttonLabel}
        </button>
      </span>
    </form>
  );
};

TodoForm = reduxForm({
  form: "todo",
  validate,
})(TodoForm);

export default TodoForm;
