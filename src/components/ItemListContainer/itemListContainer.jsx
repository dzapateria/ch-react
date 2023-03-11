
import { useState, useEffect } from "react"
import { products } from "../../productsMock"
import ItemList from "../ItemList/ItemList"
 
const ItemListContainer = ()=> { 

  const [ items, setItems ] = useState([])

  useEffect( ()=> {
    // simulando un api
      const productList = new Promise((resolve, reject)=>{
      resolve( products )
  })
 
  productList
  .then( (res)=>{ setItems( res ) } )
  .catch( (error)=>{ console.log ( error)} )

  }, [])
 

  return (
  <div>
    <h2>Estoy en itemListContainer</h2>
      <ItemList items={items} />
  </div>
  )
}
  
 
export default ItemListContainer;