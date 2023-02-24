
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/itemListContainer'
import CartWidget from './components/CartWidget/CartWidget'

function App() {
    
    return (
      <>
        <nav className="navbar navbar-dark bg-primary navbar-expand-lg fixed-top">
          <div className="container-fluid">
            <NavBar />
            <CartWidget />
          </div>
        </nav> 
      <main>
        <ItemListContainer greeting={"Acelera tu desarrollo con plantillas 10"} /> 
      </main> 
      </>
    )
  }
  
  export default App
  