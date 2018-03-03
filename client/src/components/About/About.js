import React from "react";
import { Container, Row, Col } from "reactstrap";

export default class About extends React.Component {
  render() {
    return (
      <div className="py-3">
      <Container className="py-4">
        <Row>
          <Col>
            <h2 className="section-heading text-center pb-2 display-4">
              Why are we doing this?
            </h2>
          </Col>
        </Row>
        <Row>
          <Col xs="12" lg={{ size: "8", offset: "2" }} className="px-4">
            <center>
            <p className="lead text-center pb-2">
                "Charlotte Mecklenburg school (CMS) system has 19 marching
                bands. The district offers no financial support to them because
                marching band is considered an extracurricular activity. This
                means students are on their own when it comes to financially
                supporting the program."
                <br/>
                - Derrick Russell, Reporter, WBTV
                Article
              </p>
            </center>
            <br />

            <center>
            <p className="lead text-center pb-2">
                "We have some amazing students that want opportunities like this - to be in 
                band and orchestra - anddon't have the opportunity to 
                do so because they can't get instruments,"
                <br/>
                - Principal Toni Perry, Albemarle Road Middle School
              </p>
            </center>

            <h2 className="section-heading text-center pb-2 display-4">
              How we are helping
            </h2>
            <p className="lead">
              Orchestrade assists schools to meet the musical needs of
              students by providing access to unused musical instruments. Using
              our web app, public schools will be able to loan or trade
              instruments with other schools in the area. 
              <br/>
              <br/>
              Schools can sign up to list any instrument they are
              would like to loan or trade, and search for instruments that their
              students need.
            </p>
          </Col>
          <Col
            xs="12"
            lg={{ size: "8", offset: "2" }}
            align="center"
            className="py-4"
          >
            <img
              src={require("../../image/schools.png")}
              className="img-fluid"
              alt="schools trading"
            />
          </Col>
        </Row>
      </Container>
      </div>
    );
  }
}

