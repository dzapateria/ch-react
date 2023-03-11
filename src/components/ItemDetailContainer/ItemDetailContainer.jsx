import { useParams } from "react-router-dom" 
import { products } from '../../productsMock'

function ItemDetailContainer() {
 
    const { id } = useParams()
    const product = products.find( (el)=> el.id === Number(id) )
    const {title, text, price, img, vendedor, telefono, meses} = product

  return (
    <div className="container text-center" style={{ maxWidth: "600px" }}>
    <img src={img}/> 
    <h1>  {title}</h1> 
    <p>{text}</p>
    <h2>Detalles</h2>
    <div className="d-flex justify-content-center" style={{ }}>

    
    <p className="text-start">
    <strong>Precio:</strong> {price} $  <br/>
    <strong>Vendedor:</strong> {vendedor} <br/>
    <strong>Contacto teléfono:</strong> {telefono} <br/>
    <strong>Meses del animal:</strong> {meses} <br/>
    </p>
    </div>
    </div>
  )
}

export default ItemDetailContainer