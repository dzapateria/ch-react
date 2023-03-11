
import logo from "./../../assets/logo.png"
import CartWidget from "./../CartWidget/CartWidget";
import {Link} from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar navbar-dark bg-primary navbar-expand-lg fixed-top">
      <div className="container">
      
          <Link to="/">
          <img className="logo" src={logo} alt="" /> 
          <span className="navbar-brand"> Plantillas10.com</span>
          </Link>
    
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-center w-75">
            <Link to="/" className="nav-item nav-link active">  Todas </Link> 
            <Link to="/category/adidas" className="nav-item nav-link active">  Adidas </Link>
            <Link to="/category/nike" className="nav-item nav-link active">  Nike </Link>   
            <Link to="/category/reebok" className="nav-item nav-link active">  reebok </Link>   
          </ul>
        </div>
        <CartWidget /> 
      </div>
    </nav>
  
  );
}

export default NavBar;