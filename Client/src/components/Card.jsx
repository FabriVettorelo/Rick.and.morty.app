import style from "../styles/Card.module.css"
import { Link , useLocation} from "react-router-dom";
import { addFav,removeFav } from "../redux/actions";
import { connect } from "react-redux";
import { useState , useEffect} from "react";

 function Card ({id,name,origin,status,species,gender,image,onClose,addFav,removeFav, myFavorites}){
   let location = useLocation()
   const [isFav, setIsFav]=useState(false);
   const handleFavorite = ()=>{
      if(isFav){
         setIsFav(false);
         removeFav(id);
      } else{
         setIsFav(true);
         addFav({id,name,origin,status,species,gender,image,onClose})
      }
   }
   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   return (
      <div className={style.listItem}>
           {isFav ? (
      <button onClick={handleFavorite}>❤️</button>
   ) : (
      <button onClick={handleFavorite}>🤍</button>
   )}
      {location.pathname==="/home"?<button onClick={()=>onClose(id)} className={style.closeButton}>X</button>: ""}
         <img src={image} alt='' />
         <Link to={`/detail/${id}`} >
         <h1>{name}</h1>
         </Link>
         <h2>{species}</h2>
         <h2>{gender}</h2>
       
      </div>
   );
}
const mapsStateToProps = (state)=>{
   return{
      myFavorites: state.myFavorites
   }
}

const mapDispatchToProps=(dispatch)=>{
   return{
      addFav: (character)=>{(dispatch(addFav(character)))},
      removeFav: (id)=>{dispatch(removeFav(id))}
   }
}

export default connect(
   mapsStateToProps,
   mapDispatchToProps
)(Card);