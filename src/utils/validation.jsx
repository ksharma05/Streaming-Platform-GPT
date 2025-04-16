export const validateFormFields = (email, password) =>{
    const message = {};
  
    const validateEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    message.email = validateEmail?null:"Please enter a valid email";
    const validatePassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password) //Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character:
    message.password = validatePassword?null:"Password should be minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character"
    return message;

}