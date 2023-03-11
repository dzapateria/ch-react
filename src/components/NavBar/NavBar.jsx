
import logo from "./../../assets/logo.png"
import CartWidget from "./../CartWidget/CartWidget";
import {Link} from "react-router-dom";

import styles from "./NavBar.module.css"

function NavBar() {
  return (
    <nav className="navbar navbar-dark bg-primary navbar-expand-lg fixed-top">
      <div className="container">
      
          <Link to="/">
          <img className={styles.logo} src={logo} alt="" /> 
          <span className={ `${styles.logotext} ms-2`}> Animals Shop</span>
          </Link>
    
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-center w-75">
            <Link to="/" className="nav-item nav-link active">  Todas </Link> 
            <Link to="/category/perros" className="nav-item nav-link active">  Perritos </Link>
            <Link to="/category/gatos" className="nav-item nav-link active">  Gatitos </Link>   
            <Link to="/category/caballos" className="nav-item nav-link active">  Caballos </Link>   
          </ul>
        </div>
        <CartWidget />  
      </div>
    </nav>
  
  );
}

export default NavBar;