import React from "react";
import { Container, Row, Col } from "reactstrap";
//import image from '../image/1.jpg'

export default class AboutUs extends React.Component {
  render() {
    return (
      <div className="py-3 bg-light">
        <Row>
          <Col>
            <h2 className="section-heading text-center pb-2 display-4">
              Developers Behind it All!
            </h2>
          </Col>
        </Row>
        <Row>
          <Col xs="12" lg={{ size: "8", offset: "2" }} className="px-4">
            <center>
              <i>
                "Charlotte Mecklenburg school (CMS) system has 19 marching
                bands. The district offers no financial support to them because
                marching band is considered an extracurricular activity. This
                means students are on their own when it comes to financially
                supporting the program."- Derrick Russell, Reporter, WBTV
                Article
              </i>
            </center>
            <br />
            <p className="lead">
              &emsp;&emsp;Orchestrade helps schools meet the musical needs of
              students by providing access to unused musical instruments. Using
              our web app, public schools will be able to loan or trade
              instruments with other schools in the area. Schools interested in
              utilizing our app will sign up to list instruments they are
              willing to loan or trade, and search for instruments that their
              students need.
            </p>
          </Col>
          <Col
            xs="12"
            lg={{ size: "8", offset: "2" }}
            align="center"
            className=""
          >
          </Col>
        </Row>
      </div>
    );
  }
}
