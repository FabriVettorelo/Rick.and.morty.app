import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { allUsers, postUser } from "../redux/actions";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import validate from "../validation";

const SignUp = () => {

     const dispatch = useDispatch();
     const navigate = useNavigate();
     const users = useSelector((state) => state.users);

     useEffect(() => {
         dispatch(allUsers())
     }, [dispatch]);

     const [userData, setUserData] = useState({
         email: '',
         password: ''
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
        const errorSave = validate(userData); 
        const existName = users.find(user => user.email === userData.email) ? 1 : 0; 
        if (existName === 1)  alert("This account already exists!")
        else if (Object.values(errorSave).length !== 0) alert("Complete all fields!"); 
        else {
            dispatch(postUser(userData)) 
            alert("Account created")
            navigate('/')
        }
    }

    return (
        <div style={{margin:"3vh"}}>
            <NavLink to="/" style={{color:"cyan",fontWeight:"bold"}}>Back to Log In</NavLink>
            <form onSubmit={handleSubmit}>
                <h2 style={{color:"white"}}>Create New Account</h2>

                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", fontSize: "3vh" }}>
                
                        <input onChange={handleChange} value={userData.email} style={{ color: "cyan", backgroundColor:"black", width: "20vw", fontSize: "2vh",borderRadius:"1vh", margin:"1vh" }} name='email' type='email' placeholder="Your Email"></input>
                        {errors.email ? <p style={{ color: "red", fontSize: "1.5vh",margin:"0vh" }}>{errors.email}</p>:<p style={{ color: "white", fontSize: "1.5vh",margin:"0vh" }}>{" . "}</p>}
                    

                    
                        <input onChange={handleChange} value={userData.password} style={{ color: "cyan", backgroundColor:"black", width: "20vw", fontSize: "2vh",borderRadius:"1vh",margin:"1vh" }} name='password' type='text' placeholder="Password"></input>
                        {errors.password ? <p style={{ color: "red", fontSize: "1.5vh",margin:"0vh" }}>{errors.password}</p>:<p style={{ color: "white", fontSize: "1.5vh",margin:"0vh" }}>{" . "}</p>}
                 
                </div>

                <div>
                    <button style={{backgroundColor:"purple",color:"white",fontSize:"2vh", margin:".5vh" }} disabled={userData.email === '' || userData.password === ''}>Create</button>
                </div>

            </form>
        </div>
    )
}

export default SignUp;