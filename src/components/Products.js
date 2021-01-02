import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './Style/Products.css';
import history from './history.js';
import Books from './Data/Books.json';
class Products extends Component{
  constructor(props) {
    super(props);
    this.state={
      a: 2,
      plus: '+',
      min: '-',
      Items: []
    };
    const items=this.state.Items;
    Books.forEach((item, i) => {
     items.push({...item, count: 0});
    });
    this.setState({Items: items})
 }

  render() {
  const book=this.state.Items;
  const productItems = book.map((product,index) => (
    <div className="col-sm-4">
    <div class="card card-cascade narrower">
  <div class="view overlay">
    <img class="card-img-top" src="https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).jpg"
      height="100%" alt="Card image cap" />
    <a href="#!">
      <div class="mask rgba-white-slight"></div>
    </a>
  </div>
  <div class="card-body">
  <a href="#" onClick={() =>{history.push('/other')}}><p>{product.title}</p></a>
  <hr/>
   <div className="h">MRP:Rs {product.cost}   <a href="#" onClick={() =>{history.push('/other')}}>View Details</a></div>
   {product.count===0?<button className="b" onClick={(e)=>{product.count++;this.props.addCart(e, product)}}>Add</button>:<div className="r"><button className="b1" onClick={(e)=>{product.count++;this.props.addCart(e, product)}}>{this.state.plus}</button><div className="h">{product.count}</div><button className="b1" onClick={(e)=>{product.count ===1 ?this.props.close(e,product):this.props.removeCart(e,product);product.count--}}>{this.state.min}</button></div>}
  </div>
  </div>
    </div>
  ))
 return(
   <div className="row">
   {productItems}
   </div>
 )
}
}
export default Products;
