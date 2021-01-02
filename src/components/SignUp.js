import React, { Component } from 'react';
import {Modal, Button, Form} from 'react-bootstrap';
import {auth,generateUserDocument} from "../firebase";
class SignUp extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      email: '',
      password: ''
    };
    this.createUser = this.createUser.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  async createUser(event) {
   const {name,email,password}=this.state;
   event.preventDefault();
    try{
      const {user} = await auth.createUserWithEmailAndPassword(email, password);
      generateUserDocument(user, {name});
    }
    catch(error){
    console.log(error);
    }
  }
  handleChange(event){
    const {name,value}=event.currentTarget;
    console.log(value)
    if(name === "userName"){
      this.setState({name: value})
    }
    else if(name === "userEmail"){
      this.setState({email: value})
    }
    else{
      this.setState({password: value})
    }
  }
    render() {
        return (
    <Modal show={this.props.show} onHide={this.props.handleClose}>
    <Modal.Header>
    <Modal.Title>Sign In</Modal.Title>
    </Modal.Header>
    <Modal.Body>
    <Form>
    <Form.Group controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="email" placeholder="Name" name="userName" onChange={this.handleChange}/>
    </Form.Group>

    <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name="userEmail" onChange={this.handleChange}/>
    </Form.Group>

    <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" name="password" onChange={this.handleChange}/>
    </Form.Group>
    </Form>
    </Modal.Body>
    <Modal.Footer>
    <Button variant="secondary" onClick={this.props.handleClose}>
        Close
    </Button>
    <Button variant="primary" onClick={this.createUser}>
        SignUp
    </Button>
    </Modal.Footer>
   </Modal>
  );
}
}

export default SignUp;
