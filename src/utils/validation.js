export const validateMail = email => {
  if (!email) return true;
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
};

export const getFormErrors = formData => {
  const errors = {};
  if (!formData.full_name) {
    errors.full_name = "Please enter your full name.";
  }
  if (!formData.email || !validateMail(formData.email)) {
    errors.email = "Please enter a correct Email.";
  }
  return errors;
};
