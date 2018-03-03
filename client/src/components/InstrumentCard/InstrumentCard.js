import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";
import "./InstrumentCard.css"

const InstrumentCard = props => {
  return (
    <div>
      <Card>
        {/*  350x250 for images if possible*/}
        <CardImg
          className="img-fluid"
          src={props.link}
          alt={`Beautiful image of a ${props.brand} ${props.instrument}`}
        />
        <CardBody>
          <CardTitle>
            <strong>{props.instrument}</strong> ({props.brand})
          </CardTitle>
          <CardSubtitle>{props.school}</CardSubtitle>
          <CardText>{props.details}</CardText>
          <Button className="btn-block" onClick={props.clickEvent} uniqueId={props.uniqueId} data-instrument={props.instrument} data-src={props.link} type="submit">{props.action}</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default InstrumentCard;
