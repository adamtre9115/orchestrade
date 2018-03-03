import React from 'react';
import { Button, Form, Row, FormGroup, Label, Col, Container, Input, FormText, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default class Request extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }
  render() {
    return ( 
    <div>
      <Button color="danger" onClick={this.toggle}>Request Instrument</Button>
      <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
        <ModalHeader toggle={this.toggle}>Request Form</ModalHeader>
        <ModalBody>
          <Form method ="POST">          
            <FormGroup>
              <Label for="length"><strong>Select the length you want to borrow Instrument</strong></Label> 
              <Input type="select" name="length" id="length">
                <option>3 Days</option>
                <option>1 Week</option>
                <option>1 Semester</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="email"><strong>Provide an email address to best contact you</strong></Label>
              <Input type="text" name="email" id="email" />
            </FormGroup>          
            <FormGroup>
              <Label for="name"><strong>Provide full name</strong></Label>
              <Input type="text" name="name" id="name" />
            </FormGroup>
            <FormGroup>
              <Label for="instrument"><strong>Name any specific insturment you would like to borrow</strong></Label>
              <Input type="text" id="instrument" placeholder="Instrument" />
            </FormGroup>
          </Form>            
        </ModalBody>          
        <ModalFooter>
          <Button color="primary" onClick={this.toggle}>Request</Button>
        </ModalFooter>
      </Modal>
    </div>
    );
  }
}