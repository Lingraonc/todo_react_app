import React from "react";

export const ErrorAlert = ({ text, clearErrors }) => {
  return (
    <div
      className="alert alert-danger error-alert"
      role="alert"
      onMouseEnter={() => {
        setTimeout(() => {
          clearErrors();
        }, 500);
      }}
    >
      {text}
    </div>
  );
};
