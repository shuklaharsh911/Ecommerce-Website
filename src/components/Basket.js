import React, {Component} from 'react';
import './Style/Basket.css';
class Basket extends Component {
  render() {
    const cartItems = this.props.cartItems;
    return(
      <div className="b2">
      {cartItems.length === 0?<div>Cart is Empty</div>:<div> Cart have {cartItems.length} Items;</div> }
     {  cartItems.length>0 &&
         <div>
         <ul>
        { cartItems.map((item,index) =>
             <li>
             <b>Quantity:{item.count} </b>
             <b>{item.title}</b>
            </li> )}
        </ul>
        </div>
     }
    </div>
    );
}
}
export default Basket;
