import { useParams } from "react-router-dom" 
import { products } from '../../productsMock'

function ItemDetailContainer() {
 
    const { id } = useParams()
    const product = products.find( (el)=> el.id === Number(id) )
    const {title, description, price, img} = product

  return (
    <>
    <img src={img}/> 
    <h1>  {title}</h1> 
    <p>{description}</p> 
    </>
  )
}

export default ItemDetailContainer