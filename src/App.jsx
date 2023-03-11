
import { BrowserRouter, Routes, Route } from "react-router-dom"
import NavBar from './components/NavBar/NavBar' 

// Pages
import Home from "./pages/Home"
import NoFound from './pages/NoFound'
import Cart from './pages/Cart'
import Login from './pages/Login'
import Product from "./pages/Product"

function App() {

  return (
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/category/:name" element={ <Home /> } /> 
        <Route path="/cart" element={ <Cart/> } /> 
        <Route path="/item/:id" element={ <Product/> } /> 
        <Route path="/login" element={ <Login/> } /> 
        <Route path="*" element={ <NoFound /> } /> 
      </Routes>
    </BrowserRouter>
  )
}

export default App
