const validate = (userData) => {
   const errors = {};

    if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(userData.email)){
      errors.email="Please type a valid email address"
   }
    if(!userData.email){
        errors.email="Please type your email"
    }
    if(userData.email.length>35){
        errors.email="Email address cannot be longer than 35 characters"
    }
   if(!/.*\d+.*/.test(userData.password)){
      errors.password="Error! Password must contain both letters and numbers"
   }
   if(userData.password.length<6 || userData.password.length>10){
    errors.password= "6 to 10 characters required"
   }
   return errors;
}

export default validate;

