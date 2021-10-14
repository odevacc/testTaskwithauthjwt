export const validate = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = "Обязательное поле";
    }
    if (!values.password) {
        errors.password = "Обязательное поле";
      }
    

  
    return errors;
  };