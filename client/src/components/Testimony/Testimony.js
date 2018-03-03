import React from "react";
import { Container, Row, Col } from "reactstrap";

export default class Testimony extends React.Component {
  render() {
    return (
      <div className="pb-4 bg-white">
      <Container className="py-4">
        <Row>
          <Col>
            <h2 className="section-heading text-center pb-2 display-4">
              Testimony
            </h2>
          </Col>
        </Row>
        <Row className="pb-4">
          <Col xs="12" lg="4" className="pb-4">
            <center>
            <p className="lead text-center pb-2">
                "Without Orchestrade, I dont know where we would have 
                gotten all the instruments that we used during this 
                competition. Awesome idea! Glad they started this new 
                concept for music programs and to have thse kids be 
                very creative and express themselves!"
                <br/> -2018 County Music Champs
            </p>
            </center>
          </Col>
          <Col xs="12" lg="4" className="pb-4">
            <center>
              <p className="lead text-center pb-2">

                "Being parents of two kids, that want to take music classes and also
                perform with the school band, i wasn't sure how i would be able to supply
                them with the instruments that they need. Luckily their school was a
                member with Orchestrade and able to find the instruments my children needed
                in order to participate in the music program"
                <br/> -Parents of two middle schoolers
              </p>
            </center>
          </Col>
          <Col xs="12" lg="4" className="pb-4">
            <center>
              <p className="lead text-center pb-2">
                "With all this talk about ending music progam due to budget cuts,
                and not enough funding. Orchestrade has definitely stepped up to
                help many schools with getting the instruments that they need and 
                don't have enough funding for it! Music can now live now with 
                these young kids!"
                <br/> -High school Conductor
              </p>
            </center>
          </Col>
        </Row>
      </Container>
      </div>
    );
  }
}

