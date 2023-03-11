
import styles from "./Item.module.css"
const Item = ( { item } ) => {

    
    return (
        <div className={ styles.productbox }>
            <img src={ item.img} alt="" />
            <h1>{ item.title}</h1>
            <h2>{ item.price}</h2>
        </div>
    )
}

export default Item