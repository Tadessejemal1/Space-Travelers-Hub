import React from 'react';
import PropTypes from 'prop-types';
import {
  Card, Row, Col, Button,
} from 'react-bootstrap';

const Rockets = ({ rocket }) => {
  const {
    id, rocketName, description, rocketImage,
  } = rocket;
  return (
    <Card className="d-flex border-0">
      <Row>
        <Col md={4}>
          <Card.Img
            src={rocketImage}
            alt="rocket"
            height="auto"
          />
        </Col>
        <Col>
          <Card.Body className="d-flex flex-column">
            <Card.Title>{ rocketName }</Card.Title>
            <Card.Text>
              { description }
            </Card.Text>
            <Button className="align-self-start" id={id} />
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};

Rockets.propTypes = {
  rocket: PropTypes.shape({
    id: PropTypes.number.isRequired,
    rocketName: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    rocketImage: PropTypes.string.isRequired,
  }).isRequired,
};

export default Rockets;
