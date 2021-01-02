import React, { Component } from 'react';
import history from './history.js';
import {Modal, Button, Form} from 'react-bootstrap';
import {Alert} from 'react-bootstrap';
import {auth, generateUserDocument} from "../firebase";
class Login extends Component {
   constructor(props){
     super(props);
     this.state = {
       email: '',
       password: '',
       user: []
     }
     this.handleChange = this.handleChange.bind(this)
     this.handleSubmit = this.handleSubmit.bind(this)
   }
   handleChange(e) {
     const {name,value} = e.currentTarget;
     const {email,password} = this.state;
     if(name === "email"){
       this.setState({email: value})
     }
     else{
       this.setState({password: value})
     }
   }
   handleSubmit(event) {
     event.preventDefault();
    const {email,password} = this.state;
    auth.signInWithEmailAndPassword(email, password)
    .catch(error => {
    alert(error); console.error("Error signing in with password and email", error);
   });
 }

    render() {
      const { email, password } = this.state;
      const isEnabled = email.length > 0 && password.length > 0;
        return (
    <Modal show={this.props.show} onHide={this.props.handleClose}>
    <Modal.Header>
    <Modal.Title>Sign In</Modal.Title>
    </Modal.Header>
    <Modal.Body>
    <Form >
    <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name="email" placeholder="Enter email" onChange={this.handleChange}/>
    </Form.Group>

    <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name="password" onChange={this.handleChange} placeholder="Password" />
    </Form.Group>
    </Form>
    </Modal.Body>
    <Modal.Footer>
    <Button variant="secondary" onClick={this.props.handleClose}>
        Close
    </Button>
    <Button variant="primary" disabled={!isEnabled} onClick={(event) => {this.handleSubmit(event);this.props.handleClose()}}>
        Login In
    </Button>
    </Modal.Footer>
   </Modal>
  );
}
}

export default Login;
