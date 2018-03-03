
import React, { Component } from "react";
import OktaAuth from '@okta/okta-auth-js';
import { withAuth } from '@okta/okta-react';
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  Input,
  Label
} from "reactstrap";

export default withAuth(class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sessionToken: null,
      error: null,
      username: '',
      password: ''
    }

    this.oktaAuth = new OktaAuth({ url: props.baseUrl });
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.oktaAuth.signIn({
      username: this.state.username,
      password: this.state.password
    })
      .then(res => this.setState({
        sessionToken: res.sessionToken
      }))
      .catch(err => {
        this.setState({ error: err.message });
        console.log(err.statusCode + ' error', err)
      });
  }

  handleUsernameChange(e) {
    this.setState({ username: e.target.value });
  }

  handlePasswordChange(e) {
    this.setState({ password: e.target.value });
  }

  render() {
    if (this.state.sessionToken) {
      this.props.auth.redirect({ sessionToken: this.state.sessionToken });
      return null;
    }

    const errorMessage = this.state.error ?
      <span className="error-message">{this.state.error}</span> :
      null;

    return (
      <div className="bg-light">
        <Container className="py-3">
          <Row>
            <Col lg="4"> </Col>
            <Col xs="12" lg="4" className="py-3">
              <h1 className="text-center font-weight-light">Welcome Back!</h1>
              <Form onSubmit={this.handleSubmit}>
                {errorMessage}
                <FormGroup>
                  <Label for="username">Email</Label>
                  <Input
                    type="text"
                    name="username"
                    id="username"
                    placeholder=""
                    value={this.state.username}
                    onChange={this.handleUsernameChange}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="password">Password</Label>
                  <Input
                    type="password"
                    name="password"
                    id="password"
                    placeholder=""
                    value={this.state.password}
                    onChange={this.handlePasswordChange}
                  />
                </FormGroup>
                <FormGroup className="text-center">
                  <Button className="btn btn-sm btn-outline-primary my-4 btn-block" type="submit">Log in</Button>
                </FormGroup>
              </Form>
            </Col>
            <Col lg="4"> </Col>
          </Row>
        </Container>
      </div>
    );
  }
});
