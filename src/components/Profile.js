import React,{ useContext } from 'react';
import {Card, ListGroup, Button} from 'react-bootstrap';
import { UserContext } from "./UserProvider.js";
import {auth} from "../firebase";
import history from './history.js';
import App from './App.js';
const Profile = () => {
  const user = useContext(UserContext);
  if(user){
  const {email} = user;
    return(
      <div  className="card testimonial-card mt-2 mb-3" style={{ margin: '5% 40%' }}>
     <div className="card-up aqua-gradient"></div>
      <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" height="240px"  src="https://mdbootstrap.com/img/Photos/Avatars/img%20%2831%29.jpg" />
      <Card.Body>
        <Card.Title>Profile</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>{email}</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup>
      <Card.Body>
      <Button variant="primary" onClick={()=>{auth.signOut();history.push("/")}}>signOut</Button>
      </Card.Body>
    </Card>
    </div>
      );
  }else{return(<div></div>);}
  }
export default Profile;
