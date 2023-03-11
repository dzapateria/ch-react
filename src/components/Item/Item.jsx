
import styles from "./Item.module.css"
import {Link} from "react-router-dom"
const Item = ( { item } ) => {

    
    return (
        <div className={ styles.productbox }>
            <img src={ item.img} alt="" />
            <h1>{ item.title}</h1>
            <h2>{ item.price}</h2>
            <Link to={ `/item/${item.id}` }>
            <button>Ver detalle</button>
             </Link>
        </div>
    )
}

export default Item