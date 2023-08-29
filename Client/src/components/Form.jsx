import { useState } from "react";
import validate from "../validation";
import { NavLink } from "react-router-dom";

const Form = ({ login }) => {

    const [showPassword, setShowPassword] = useState(false);
    const [userData, setUserData] = useState({
        email: "",
        password: ""
    })
    const handleChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })
        setErrors(validate({
            ...userData,
            [event.target.name]: event.target.value
        }))
    }
    const [errors, setErrors] = useState({})

    const handleSubmit = (event) => {
        event.preventDefault();
        login(userData);
    }

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <form onSubmit={handleSubmit}>
            <br />
            <h3 style={{ color: "white" }}>Log in to your R&M Account</h3>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", fontSize: "3vh" }}>
                <label style={{ color: "white", width: "30vw" }} htmlFor="email">Email: </label>
                <input name='email' style={{ color: "cyan", backgroundColor:"black", width: "20vw", fontSize: "2vh",borderRadius:"1vh" }} type='email' placeholder=" Type your account email here..." onChange={handleChange} value={userData.email}></input>
                {errors.email ? <p style={{ color: "red", fontSize: "1.5vh",margin:"0vh" }}>{errors.email}</p>:<p style={{ color: "white", fontSize: "1.5vh",margin:"0vh" }}>{" . "}</p>}
                <label style={{ color: "white" }} htmlFor="password">Password: </label>
                <input name='password' style={{ color: "cyan",backgroundColor:"black", width: "20vw", fontSize: "2vh" ,borderRadius:"1vh"}} type={showPassword ? 'text' : 'password'} placeholder=" Password here..." onChange={handleChange} value={userData.password}></input>
                <button type="button" style={{backgroundColor:"purple",color:"white",margin:".5vh"}} onClick={togglePasswordVisibility}>
                    {showPassword ? "⦿ Hide!" : "◠ Show!"}
                </button>
                {errors.password ?<p style={{ color: "red", fontSize: "1.5vh",margin:"0vh" }}>{errors.password}</p>:<p style={{ color: "white", fontSize: "1.5vh",margin:"0vh" }}>{" . "}</p>}</div>
            <hr />
            <button style={{backgroundColor:"purple",color:"white",fontSize:"2vh" }} >Enter</button>

            <p style={{ color:"white", marginTop:"20vh",fontWeight:"bold"}}>Welcome to the R&M app, this is a practice excercise to learn the basic concepts of back-end and front-end development using JavaScript and an external API.</p>
            <NavLink to="/signup" style={{color:"cyan",fontWeight:"bold"}}>Click here to Register a new account</NavLink>
        </form>
    )
}

export default Form;