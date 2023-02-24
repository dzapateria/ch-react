
import cartimage from './../../../public/cart.png' 
import menubar from "./../../../public/menu.png" 

export default function CartWidget() {
  return (
    <div className="cartwidget">
      <a href="#"><img src={cartimage} alt="" /> </a>
     <a href="#"><img class="menubar" src={menubar} alt="" /> </a>
     
    </div>
  )
}
