import React, { Component } from "react";
import PropTypes from "prop-types";
import OktaAuth from "@okta/okta-auth-js";
import Footer from "../Footer";
import { withAuth } from "@okta/okta-react";
import config from "../../app.config";

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

export default withAuth(
  class Signup extends Component {
    constructor(props) {
      super(props);
      this.state = {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        school: "",
        sessionToken: null
      };
      this.oktaAuth = new OktaAuth({ url: config.url });
      this.checkAuthentication = this.checkAuthentication.bind(this);
      this.checkAuthentication();

      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
      this.handleLastNameChange = this.handleLastNameChange.bind(this);
      this.handleEmailChange = this.handleEmailChange.bind(this);
      this.handlePasswordChange = this.handlePasswordChange.bind(this);
      this.handleSchoolNameChange = this.handleSchoolNameChange.bind(this);
    }

    async checkAuthentication() {
      const sessionToken = await this.props.auth.getIdToken();
      if (sessionToken) {
        this.setState({ sessionToken });
      }
    }

    componentDidUpdate() {
      this.checkAuthentication();
    }

    handleFirstNameChange(e) {
      this.setState({ firstName: e.target.value });
    }
    handleLastNameChange(e) {
      this.setState({ lastName: e.target.value });
    }
    handleEmailChange(e) {
      this.setState({ email: e.target.value });
    }
    handlePasswordChange(e) {
      this.setState({ password: e.target.value });
    }
    handleSchoolNameChange(e) {
      this.setState({ school: e.target.value });
    }

    handleSubmit(e) {
      e.preventDefault();
      console.log(this.state);
      fetch("/api/users", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(this.state)
      })
        .then(user => {
          this.oktaAuth
            .signIn({
              username: this.state.email,
              password: this.state.password
            })
            .then(res =>
              this.setState({
                sessionToken: res.sessionToken
              })
            );
        })
        .catch(err => console.log);
    }

    render() {
      if (this.state.sessionToken) {
        this.props.auth.redirect({ sessionToken: this.state.sessionToken });
        return null;
      }

      return (
        <div className="bg-light">
          <Container className="py-3">
            <Row>
              <Col xs="12" lg="6" className="py-3">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/G-clef.svg/601px-G-clef.svg.png"
                  //"http://via.placeholder.com/700x400"
                  className="mx-auto d-block"
                  height="500"
                />
              </Col>
              <Col xs="12" lg="4" className="py-3">
                <h1 className="text-center font-weight-light">
                  Create an Account
                </h1>
                <Form onSubmit={this.handleSubmit}>
                  <FormGroup>
                    <Label for="firstName">First Name</Label>
                    <Input
                      type="text"
                      name="firstName"
                      id="firstName"
                      placeholder="John"
                      value={this.state.firstName}
                      onChange={this.handleFirstNameChange}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="lastName">Last Name</Label>
                    <Input
                      type="text"
                      name="lastName"
                      id="lastName"
                      placeholder="Doe"
                      value={this.state.lastName}
                      onChange={this.handleLastNameChange}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="school">School</Label>
                    <Input
                      type="text"
                      name="school"
                      id="school"
                      placeholder="Harvard University"
                      value={this.state.school}
                      onChange={this.handleSchoolNameChange}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="email">Email</Label>
                    <Input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="name@school.edu"
                      value={this.state.email}
                      onChange={this.handleEmailChange}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="password">Password</Label>
                    <Input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="Minimum of 8 characters"
                      value={this.state.password}
                      onChange={this.handlePasswordChange}
                    />
                    <Label for="password" className="small">
                      <i>
                        Include a minimum of 1 uppercase letter and a number
                      </i>
                    </Label>
                  </FormGroup>
                  <FormGroup className="text-center">
                    <Button
                      className="btn btn-sm btn-outline-primary my-4 btn-block"
                      type="submit"
                    >
                      Sign Up
                    </Button>
                  </FormGroup>
                </Form>
              </Col>
            </Row>
          </Container>
          <Footer />
        </div>
      );
    }
  }
);
