import style from "../styles/Card.module.css"
import { Link , useLocation} from "react-router-dom";
import { addFav,removeFav } from "../redux/actions";
import { connect } from "react-redux";
import { useState , useEffect} from "react";

 function Card ({id,name,origin,status,species,gender,image,addFav,removeFav, myFavorites,onClick, selected}){
   let location = useLocation()
   const [isFav, setIsFav]=useState(false);

   useEffect(() => {
      myFavorites.forEach((fav) => {
        if (fav.id === id) {
          setIsFav(true);
        }
      });
    }, [myFavorites, id]);

    const handleFavorite = () => {
      if (isFav) {
        setIsFav(false);
        removeFav(id);

      } else {
        setIsFav(true);
        addFav({ id, name, origin, status, species, gender, image});
      }
    };

    return (
      <div className={style.listItem} >
        {isFav ? (
          <button style={{fontSize:"2vh"}} onClick={handleFavorite}>❤️</button>
        ) : (
          <button style={{fontSize:"2vh"}} onClick={handleFavorite}>🤍</button>
        )}
       
        <img src={image} alt='' onClick={() => onClick({ id, name, origin, status, species, gender, image })} />
      </div>
    );
  }
  
  const mapsStateToProps = (state) => {
    return {
      myFavorites: state.myFavorites,
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      addFav: (character) => { (dispatch(addFav(character))) },
      removeFav: (id) => { dispatch(removeFav(id)) }
    }
  }
  
  export default connect(
    mapsStateToProps,
    mapDispatchToProps
  )(Card);