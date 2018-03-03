import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

const AccountDetail = props => {
  return (
    <Form>
      <h3>Account Details</h3>
      <FormGroup>
        <div className="row">
          <div className="col-md-2">
            <Label for="userName">User Name</Label>
          </div>
          <div className="col-md-8">
            <Input
              type="text"
              name="userName"
              id="userName"
              placeholder="with a placeholder"
            />
          </div>
        </div>
      </FormGroup>
      <FormGroup>
        <div className="row">
          <div className="col-md-2">
            <Label for="userEmail">Email</Label>
          </div>
          <div className="col-md-8">
            <Input
              type="email"
              name="userEmail"
              id="userEmail"
              placeholder="YourSchool@yourschool.edu"
            />
          </div>
        </div>
      </FormGroup>
    </Form>
  );
};

export default AccountDetail;
