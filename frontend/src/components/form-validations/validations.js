export function isRequired(value) {
  let errors;

  const regexp = /[A-z\u00C0-\u00ff]+/g;
  if (!value || value === "" || value === null) {
    errors = "Required";
    return errors;
  }
  if (!regexp.test(value)) {
    errors = "Please use English letters";
    return errors;
  }
  return errors;
}
