import style from "../styles/Card.module.css"
import { Link } from "react-router-dom";
import { addFav,removeFav } from "../redux/actions";
import { connect } from "react-redux";
import { useState , useEffect} from "react";

 function Card ({id,name,species,image,onClose,addFav,removeFav, myFavorites}){

   const [isFav, setIsFav]=useState(false);
   const handleFavorite = ()=>{
      if(isFav){
         setIsFav(false);
         removeFav(id);
      } else{
         setIsFav(true);
         addFav({id,name,species,image,onClose})
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
       <button onClick={()=>onClose(id)} className={style.closeButton}>X</button>
         <img src={image} alt='' />
         <Link to={`/detail/${id}`} >
         <h1>{name}</h1>
         </Link>
         <h2>{species}</h2>
       
      </div>
   );
}


const mapDispatchToProps=(dispatch)=>{
   return{
      addFav: (character)=>{(dispatch(addFav(character)))},
      removeFav: (id)=>{dispatch(removeFav(id))}
   }
}
const mapsStateToProps = (state)=>{
   return{
      myFavorites: state.myFavorites
   }
}

export default connect(
   mapsStateToProps,
   mapDispatchToProps
)(Card);