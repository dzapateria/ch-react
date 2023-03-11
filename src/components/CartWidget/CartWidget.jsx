
import { AiOutlineShoppingCart } from 'react-icons/ai'
import menubar from "./../../assets/menu.png"
import './CartWidget.css'
import { Link } from "react-router-dom"

export default function CartWidget() {
  return (
    <Link to="/cart">
      <div className="cartwidget">
        <AiOutlineShoppingCart color="white" size="2em" />
        <div className="contador">
          <span>0</span>
        </div>
      </div>
    </Link>
  )
}
