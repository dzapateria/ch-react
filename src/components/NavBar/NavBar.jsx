
import logo from "../../../public/logo.png"
import CartWidget from "../CartWidget/CartWidget";

function NavBar() {
  return (
     <>
        <img className="logo" src={logo} alt="" />
         <div className="categorias"> 
              <ul>
                <li><a href="#"> WP</a></li>
                <li><a href="#"> HTML</a></li>
                <li><a href="#"> Figma</a></li>
                <li><a href="#"> PSD</a></li>
              </ul> 
          </div>  
      </>
  );
}
 
export default NavBar;