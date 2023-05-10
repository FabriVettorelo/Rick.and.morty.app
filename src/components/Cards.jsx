import Card from './Card';
import styles from "../styles/Cards.module.css"

export default function Cards({characters, onClose}) {
   return (<div className={styles.cardscontainer}>
{
   characters.map(({id,name,status,species,gender,image}) => {
      return(
       <Card key={id}
             id={id}
             name={name}
             species={species}
             image={image}
             onClose={onClose}
             />    
      )
   })
}
   </div>);
}
