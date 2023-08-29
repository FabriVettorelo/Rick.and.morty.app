import { NavLink } from "react-router-dom";

const Nav = ({onSearch}) => {
    return (
    <div style={{display:"flex",margin:"2vh",alignItems:"center",justifyContent:"center"}}>      
        <button style={{backgroundColor:"violet",fontSize:"3vh",fontWeight:"bold"}}><NavLink to="/about">❔</NavLink>  </button>
        <button style={{backgroundColor:"violet",fontSize:"3vh",fontWeight:"bold"}}><NavLink to="/home">🏡</NavLink></button>
        <button style={{backgroundColor:"violet",fontSize:"3vh",fontWeight:"bold"}}><NavLink to="/favorites">❤️</NavLink></button>
        <button style={{backgroundColor:"purple",fontSize:"3.4vh",fontWeight:"bold"}}><NavLink to="/">Exit</NavLink></button>
    </div>
    )
}

export default Nav;