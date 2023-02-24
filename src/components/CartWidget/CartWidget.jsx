
import cartimage from './../../assets/cart.png' 
import menubar from "./../../assets/menu.png"

export default function CartWidget() {
  return (
    <div className="cartwidget">
      <a href="#"><img src={cartimage} alt="" /> </a>
     <a href="#"><img class="menubar" src={menubar} alt="" /> </a>
     
    </div>
  )
}
