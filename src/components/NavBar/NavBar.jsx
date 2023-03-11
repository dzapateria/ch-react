
import logo from "./../../assets/logo.png"
import CartWidget from "./../CartWidget/CartWidget";

function NavBar() {
  return (
     <>
         <a className="navbar-brand" href="#">
          <img className="logo" src={logo} alt="" />
          <span> Plantillas10.com</span>
         </a>
         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button> 
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-center w-75">
          <li className="nav-item"> <a className="nav-link active" aria-current="page" href="#">Wordpress</a>  </li>
          <li className="nav-item"> <a className="nav-link active" aria-current="page" href="#">HTML</a>  </li>
          <li className="nav-item"> <a className="nav-link active" aria-current="page" href="#">Figma</a>  </li>
          <li className="nav-item"> <a className="nav-link active" aria-current="page" href="#">PSD</a>  </li> 
        </ul>  
    </div>
    <CartWidget />
      
        
      </>
  );
}
 
export default NavBar;