
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/itemListContainer'
import CartWidget from './components/CartWidget/CartWidget'

function App() {
    
    return (
      <>
        <nav>
          <NavBar />
          <CartWidget />
        </nav> 
      <main>
        <ItemListContainer contenido={"Acelera tu desarrollo con plantillas 10"} /> 
      </main>
      </>
    )
  }
  
  export default App
  