
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { products } from "../../productsMock"

// Components
import ItemList from "../ItemList/ItemList"

const ItemListContainer = () => {

  const [items, setItems] = useState([])

  const { categoryId } = useParams()

  const productosFiltrados = products.filter((elemento) => elemento.category === categoryId)

  console.log(productosFiltrados)

  useEffect(() => {
    // simulando un api
    const productList = new Promise((resolve, reject) => {
      resolve(categoryId ? productosFiltrados : products)
    })

    productList
      .then((res) => { setItems(res) })
      .catch((error) => { console.log(error) })

  }, [categoryId])


  return (
    <div className="container">
      <div className="row">
        <h2 className="text-center">Nuestros animalitos te esperan</h2>
        <ItemList items={items} />
      </div>
    </div>
  )
}


export default ItemListContainer;