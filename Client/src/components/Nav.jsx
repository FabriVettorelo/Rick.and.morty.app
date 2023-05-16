import SearchBar from "./SearchBar.jsx";
import { NavLink } from "react-router-dom";

const Nav = ({onSearch}) => {
    return (
    <div>
        <SearchBar onSearch={onSearch}/>
        
        <button><NavLink to="/about">About</NavLink>  </button>
        <button><NavLink to="/home">Back to Home</NavLink></button>
        <button><NavLink to="/favorites">Favorites</NavLink></button>

        <button><NavLink to="/">LogOut</NavLink></button>
    </div>
    )
}

export default Nav;