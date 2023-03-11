
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import CartWidget from './components/CartWidget/CartWidget'

import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <nav className="navbar navbar-dark bg-primary navbar-expand-lg fixed-top">
          <div className="container">
            <NavBar />
          </div>
        </nav>
        <main>
          <ItemListContainer />
        </main>
      </Routes>
    </BrowserRouter>
  )
}

export default App
