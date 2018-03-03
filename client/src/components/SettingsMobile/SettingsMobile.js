import React from "react";
import {
  Card,
  CardBody,
} from "reactstrap";

const SettingsMobile = props => {
  return (
    <div>
        <div>
      <Card>
        <CardBody><a href="/">Home</a></CardBody>
      </Card>
    </div>
        <div>
      <Card>
        <CardBody><a data-value="account" onClick={props.aLinkClicked}> Account</a></CardBody>
      </Card>
    </div>
    <div>
    <Card>
      <CardBody><a data-value="privacy" onClick={props.aLinkClicked}> Privacy & Settings</a></CardBody>
    </Card>
  </div>
  <div>
      <Card>
        <CardBody><a href="/about">About Orchestrade</a></CardBody>
      </Card>
    </div>
    </div>
  );
};

export default SettingsMobile;
