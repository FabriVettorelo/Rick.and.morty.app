import Card from './Card';
import styles from "../styles/Cards.module.css"

export default function Cards({characters, onClose}) {
   return (<div className={styles.cardscontainer}>
{
   characters.map(({id,name,status,species,gender,origin,image}) => {
      return(
       <Card key={id}
             id={id}
             name={name}
             status={status}
             species={species}
             gender={gender}
             image={image}
             origin={origin.name}
             onClose={onClose}
             />    
      )
   })
}
   </div>);
}
