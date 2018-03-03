import React from "react";
import {
  Jumbotron,
  Button,
  ButtonGroup,
  InputGroup,
  InputGroupAddon,
  Input,
  Container,
  Col
} from "reactstrap";

const Add = props => {
  return (
    <div>
      <Jumbotron className="bg-dark text-white jumbotron-fluid mb-0 pb-3">
        <div className="text-center">
          <h1 className="display-4">Add Instruments</h1>
          <p className="lead">Help another school by making an unused instrument available!</p>
          <hr className="my-2" />
          <p className="lead">
            <ButtonGroup className="btn-group-sm">
              <Button onClick={() => props.handleClick("Brass")}>Brass</Button>
              <Button onClick={() => props.handleClick("Keyboard")}>Keyboard</Button>
              <Button onClick={() => props.handleClick("Percussion")}>Percussion</Button>
              <Button onClick={() => props.handleClick("String")}>String</Button>
              <Button onClick={() => props.handleClick("Woodwind")}>Woodwind</Button>
            </ButtonGroup>
            <br />
          </p>
        </div>
      </Jumbotron>
    </div>
  );
};

export default Add;
