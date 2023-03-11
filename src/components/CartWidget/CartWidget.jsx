
import { AiOutlineShoppingCart } from 'react-icons/ai'
import menubar from "./../../assets/menu.png"
import './CartWidget.css'

export default function CartWidget() {
  return (
    <div className="cartwidget"> 
      <a href="#">   
        <AiOutlineShoppingCart color="white" size="2em"/>   
      </a>
     <a href="#"><img className="menubar" src={menubar} alt="" /> </a>
     
    </div>
  )
}
