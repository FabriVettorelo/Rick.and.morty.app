const validate = (userData) => {
   const errors = {};

    if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(userData.email)){
      errors.email="Ingrese una dirección válida!"
   }
    if(!userData.email){
        errors.email="Debe ingresar una dirección Email"
    }
    if(userData.email.length>35){
        errors.email="La dirección no debe superar 35 caracteres"
    }
   if(!/.*\d+.*/.test(userData.password)){
      errors.password="Error en la password! Debe contener letras y numeros"
   }
   if(userData.password.length<6 || userData.password.length>10){
    errors.password= "Se requieren 6 a 10 caracteres"
   }
   return errors;
}

export default validate;

