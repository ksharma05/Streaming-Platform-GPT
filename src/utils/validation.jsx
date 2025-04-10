export const validateFormFields = (name=null, email, password) =>{
    const error = {};

    const validateEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    error.email = validateEmail;
    const validatePassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password) //Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character:
    error.password = validatePassword
    if(!name){
        const validateName = /^[\\p{L} .'-]+$/.test(name);
        error.name = validateName;
    }
    error.name = true;
    return error;

}