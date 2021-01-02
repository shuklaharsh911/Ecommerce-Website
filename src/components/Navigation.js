import React, { Component,useState,useEffect,useContext} from 'react';
import {Navbar, Nav, Form, FormControl, Button, NavDropdown, Alert} from 'react-bootstrap';
import Login from './Login.js';
import Profile from './Profile.js';
import SignUp from './SignUp.js';
import './Style/Navigation.css';
import history from './history.js';
import {auth} from "../firebase";
import { UserContext } from "./UserProvider.js";
import Notification from './Notification.js';
function Navigation(props) {
  const user = useContext(UserContext);
  const [isLogin,setLogin] = useState(false);
  const [isSignUp,setSignup] = useState(false);
  const [show,setShow] = useState(false);
   const handleClose = () => {
     setLogin(false);setSignup(false);setShow(false);
   }
   if(user){
  return(
  <Navbar bg="dark" variant="dark" sticky="top" expand="lg" className="purpleBackground">
    <Nav className="mr-auto">
    <Nav.Link href="Profile">Profile</Nav.Link>
    </Nav>
  </Navbar>
);
}
  else{
    return(
    <div>
<Navbar bg="dark" variant="dark" sticky="top" expand="lg" className="purpleBackground">
  <Nav className="mr-auto">
    <Button className="my-button" onClick={() => setLogin(true)}>Login</Button>
    <Button className="my-button" onClick={() => setSignup(true)}>SignUp</Button>
    <SignUp show={isSignUp} handleClose={handleClose} />
    <Login show={isLogin} handleClose={handleClose} />
  </Nav>
</Navbar>
<Notification show={show} handleClose={handleClose} />
</div>);
  }
}
export default Navigation;
