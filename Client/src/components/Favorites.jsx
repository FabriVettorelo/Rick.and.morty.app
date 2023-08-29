import Card from "./Card";
import { connect, useDispatch} from "react-redux";
import { orderCards, filterCards } from "../redux/actions";
import { useState } from "react";
import { useSelector } from "react-redux";
import { removeFav } from "../redux/actions";
import styles from "../styles/Cards.module.css"

const Favorites = ({myFavorites}) => {

    const favs = useSelector(state => state.myFavorites);
    const [aux, setAux] = useState(false);
    const dispatch = useDispatch();
    
    const handleOrder = (event)=>{
        dispatch(orderCards(event.target.value));
        setAux(true);
    };
    const handleFilter = (event)=>{
        dispatch(filterCards(event.target.value))
    };
   
    const onClose = (id) => {
        const charactersFiltered = favs.filter((character) => character.id !== id);
        dispatch(removeFav(charactersFiltered));
    };

    return (
        <div >
            
            <select style={{backgroundColor:"purple",fontSize:"2vh", fontWeight:"bold"}} onChange={handleOrder}>
                <option value="A">ID Low-High</option>
                <option value="D">ID High-Low</option>
            </select>
            <select style={{backgroundColor:"purple",fontSize:"2vh", fontWeight:"bold"}} onChange={handleFilter}>
                <option value="All">All</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value= "Genderless">Genderless</option>
                <option value="unknown">unknown</option>
            </select>
       <div className={styles.favcontainer}> {
            myFavorites?.map(fav => {
                return (
                    <Card
                        key={fav.id}
                        id={fav.id}
                        name={fav.name}
                        status={fav.status}
                        species={fav.species}
                        gender={fav.gender}
                        image={fav.image}
                        onClose={() => onClose(fav.id)}
                    />
                )
            })
        }</div>
        </div>
    )
}

    
const mapStateToProps = (state)=>{
    return{
        myFavorites: state.myFavorites
    }
}

export default connect(
    mapStateToProps,
    null
)(Favorites);