import React from "react";
import { Jumbotron } from "reactstrap";
import "./Jumbo.css";

const Jumbo = props => {
  return (
    <div>
      <Jumbotron className="bg-dark text-white jumbotron-fluid mb-0 pb-3">
        <div className="text-center">
          <h1 className="display-4">Orchestrade</h1>
          <p className="lead">Musica Vivit In Aeternum</p>
          <p className="lead">
            <a href="/login" className="btn btn-primary">
              Get Started
            </a>
          </p>
        </div>
      </Jumbotron>
    </div>
  );
};

export default Jumbo;
