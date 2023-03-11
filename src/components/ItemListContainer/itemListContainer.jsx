
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { products } from "../../productsMock"

// Components
import ItemList from "../ItemList/ItemList"
 
const ItemListContainer = ()=> { 

  const [ items, setItems ] = useState([])

  const test  = useParams() 
  console.log( test )

  const productosFiltrados = products.filter( (elemento)=> elemento.category === categoryId )

  console.log( productosFiltrados )

  useEffect( ()=> {
    // simulando un api
      const productList = new Promise((resolve, reject)=>{
      resolve( categoryId ? productosFiltrados : products  )
  })
 
  productList
  .then( (res)=>{ setItems( res ) } )
  .catch( (error)=>{ console.log ( error)} )

  }, [categoryId])
 

  return (
  <main>
    <h2>Estoy en itemListContainer</h2>
      <ItemList items={items} />
  </main>
  )
}
  
 
export default ItemListContainer;