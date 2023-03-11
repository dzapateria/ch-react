
import styles from "./Item.module.css"
import {Link} from "react-router-dom"
const Item = ( { item } ) => {
 
    return ( 
        <div className="col mx-auto mt-4 d-flex justify-content-center">
            <div className={`${styles.productbox} card`}>
            <Link to={ `/item/${item.id}` }> 
                <img src={item.img} className={`${styles.imgcard} card-img-top `}/>
                </Link> 
                <div className="card-body" style={{height: "260px"}}>
                <h5 className="card-title" style={{height: "50px"}}>{ item.title}</h5> 
                <p className="card-text" style={{height: "120px"}}> { item.text }</p>
                    <div className="botones d-flex justify-content-between">

                    
                    <Link to={ `/item/${item.id}` }> 
                        <button className="btn btn-primary">Ver detalle</button>
                    </Link> 
                    <button className="btn btn-outline-primary ms-3"> { item.price} $</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Item