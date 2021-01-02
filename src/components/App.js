import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Switch,Link} from "react-router-dom";
import logo from './logo.svg';
import Navigation from './Navigation.js';
import './Style/App.css';
import ProductDetails from './ProductDetails.js';
import history from './history.js';
import Products from './Products.js';
import Basket from './Basket.js';
class App extends Component {
  constructor(props){
    super(props);
    this.state={
      cartItems:[],
      show: false
    };

    this.addCart=this.addCart.bind(this)
    this.handleClose=this.handleClose.bind(this)
    this.close=this.close.bind(this)
    this.removeCart=this.removeCart.bind(this)
  }
  removeCart(e,product){
    this.setState(state=>{
      const cartItems = state.cartItems;
      cartItems.forEach(item => {
        if(item.id === product.id){
          item.count--;
        }
      });
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
      return cartItems;
    })
  }
  addCart(e, product){
    this.setState(state=>{
      const cartItems = state.cartItems;
      let itemIncart = false;
      cartItems.forEach(item => {
        if(item.id === product.id){
          itemIncart = true;
          item.count++;
        }
      });
      if(!itemIncart){
        cartItems.push({...product, count: 1});
      }
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
      return cartItems;
    })
  }
  handleClose(e,index) {
    const item = Object.assign([], this.state.cartItems)
    item.splice(index, 1);
    this.setState({cartItems: item})
  }
  close(e,product){
    const cartItems=this.state.cartItems;
    var ind=0;
    cartItems.forEach((item, index) => {
      if(item.id === product.id){
        ind=index;
      }
    });
    const item = Object.assign([], this.state.cartItems)
    item.splice(ind, 1);
    this.setState({cartItems: item})
  }
  render() {
   return (
    <div className="App">
    <Navigation />
    <header className="App-header">
     <div className="row">
     <div className="col-md-8">
     < Products addCart={this.addCart} close={this.close} removeCart={this.removeCart}/>
    </div>
    <div className="col-md-4">
    <div class="card" >
  <div class="card-body">
  <Basket cartItems={this.state.cartItems} handleClose={this.handleClose} />
  </div>
   </div>
  </div>
    </div>
      </header>
    </div>
  );
}
}

export default App;
