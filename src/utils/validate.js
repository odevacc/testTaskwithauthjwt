export const validate = (values) => {
  const errors = {};
  if (!values.email) {
    errors.email = "Обязательное поле";
  }
  if (!values.password) {
    errors.password = "Обязательное поле";
  }
  if (!values.username || values.username.split('').length < 5) {
    errors.username = "Ник должен быть не пустым и больше 4 символов";
  }



  return errors;
};