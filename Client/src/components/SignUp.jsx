import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { allUsers, postUser } from "../redux/actions";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect } from "react";

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

    // const handleChange = (event) => {
    //     setUserData({
    //         ...userData,
    //         [event.target.name]: event.target.value
    //     })

    //     setErrors(validate({
    //         ...userData,
    //         [event.target.name]: event.target.value
    //     }))
    // }

    const [errors, setErrors] = useState({})

    const handleSubmit = (event) => {
        event.preventDefault(); 
        //const errorSave = validate(userData); 
        const existName = users.find(user => user.email === userData.email) ? 1 : 0; 
        if (existName === 1)  alert("Ya hay una cuenta con ese email registrado")
       // else if (Object.values(errorSave).length !== 0) alert("Debes completar todos los datos necesarios"); 
        else {
            dispatch(postUser(userData)) 
            alert("Cuenta creada exitosamente")
            navigate('/')
        }
    }

    return (
        <div style={{margin:"3vh"}}>
            <NavLink to="/" style={{color:"cyan",fontWeight:"bold"}}>Back to Log In</NavLink>
            <form onSubmit={handleSubmit}>
                <h2>Crear Cuenta</h2>

                {/* <div className={style.text}>
                    <div className={style.content}>
                        <input onChange={handleChange} value={userData.email} name='email' type='email' placeholder="Correo electrónico"></input>
                        {errors.email && <span className={style.error}>{errors.email}</span>}
                    </div>

                    <div className={style.content}>
                        <input onChange={handleChange} value={userData.password} name='password' type='password' placeholder="Contraseña"></input>
                        {errors.password && <span className={style.error}>{errors.password}</span>}
                    </div>
                </div> */}

                <div>
                    <button  disabled={userData.email === '' || userData.password === ''}>Crear</button>
                </div>

            </form>
        </div>
    )
}

export default SignUp;