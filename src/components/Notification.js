import React, { Component } from 'react';
import {Alert} from 'react-bootstrap';
class Notification extends Component {
  render(){
      if(this.props.show){
        return (
      <Alert variant="danger" onClose={this.props.handleClose} dismissible>
        <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
        <p>
          Change this and that and try again. Duis mollis, est non commodo
          luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
          Cras mattis consectetur purus sit amet fermentum.
        </p>
      </Alert>
    );
  }
  else{
    return<div></div>;
  }
}
}
export default Notification;
