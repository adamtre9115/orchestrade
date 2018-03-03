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

const Search = props => {
  return (
    <div>
      <Jumbotron className="bg-dark text-white jumbotron-fluid mb-0 pb-3">
        <div className="text-center">
          <h1 className="display-4">Browse</h1>
          <p className="lead">Find the instrument you need.</p>
          <hr className="my-2" />
            <ButtonGroup className="btn-group-sm">
              <Button data-value="Brass" onClick={props.btnClick} >Brass</Button>
              <Button data-value="Keyboard" onClick={props.btnClick} >Keyboard</Button>
              <Button data-value="Percussion" onClick={props.btnClick} >Percussion</Button>
              <Button data-value="String" onClick={props.btnClick}>String</Button>
              <Button data-value="Woodwind" onClick={props.btnClick} >Woodwind</Button>
            </ButtonGroup>
            <br />
            <p>or</p>
          <Container>
            <Col xs="12" lg={{ size: "6", offset: "3" }}>
              <InputGroup>
                <Input placeholder="Cello" onChange={props.handleChange} />
                <InputGroupAddon addonType="append">
                  <Button color="secondary" value={props.yourValue} onClick={props.clickSearch} >Search!</Button>
                </InputGroupAddon>
              </InputGroup>
            </Col>
          </Container>
        </div>
      </Jumbotron>
    </div>
  );
};

export default Search;
