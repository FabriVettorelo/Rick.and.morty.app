import { useState } from "react";
import validate from "../validation";

const Form = ({login}) => {
    const[userData, setUserData]= useState({
        email:"",
        password:""
    })
    const[errors, setErrors]= useState({})

    const handleSubmit = (event) =>{
        event.preventDefault();
        login(userData);
    }
    const handleChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value })
         setErrors(validate({
                ...userData,
                [event.target.name]: event.target.value
            }))
    }

    return (
        <form onSubmit={handleSubmit}>
            <br/>
            <label style={{color:"white"}} htmlFor="email" value={userData.email}>Email: </label>
            <input name='email' type='email' placeholder="su email aqui" onChange={handleChange}></input>
            {errors.email && <p style={{color:"white"}}>{errors.email}</p>}
            <hr/>
            <label style={{color:"white"}} htmlFor="password" value={userData.password}>Password: </label>
            <input name='password' type='text' placeholder="su password aqui" onChange={handleChange}></input>
            {errors.password && <p style={{color:"white"}}>{errors.password}</p>}
            <hr/>
            <button>Submit</button>
        </form>
    )
}

export default Form;