import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import {
  Card, Row, Col, Badge, Button,
} from 'react-bootstrap';
import { reserveRocket, cancelRocketReservation } from '../../redux/Rockets/rockets';

const Rocket = ({ rocket }) => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.Rockets);
  const {
    id, rocketName, description, rocketImage, reserved,
  } = rocket;
  const handleReserve = (e) => {
    if (!reserved) {
      dispatch(reserveRocket(+e.target.id));
      console.log('reserved...', rockets);
    } else {
      dispatch(cancelRocketReservation(+e.target.id));
      console.log('cancel reservation...', rockets);
    }
  };
  return (
    <Card className="d-flex border-0">
      <Row>
        <Col md={4}>
          <Card.Img
            src={rocketImage}
            alt="rocket"
            height="250px"
          />
        </Col>
        <Col>
          <Card.Body className="d-flex flex-column">
            <Card.Title>{ rocketName }</Card.Title>
            <Card.Text>
              {reserved ? <Badge bg="info" className="me-2">Reserved</Badge> : ''}
              { description }
            </Card.Text>
            <Button className="align-self-start" variant={reserved ? 'outline-secondary' : 'primary'} id={id} onClick={handleReserve}>
              {reserved ? 'Cancel Reservation' : 'Reserve Rocket'}
            </Button>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};

Rocket.propTypes = {
  rocket: PropTypes.shape({
    id: PropTypes.number.isRequired,
    rocketName: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    rocketImage: PropTypes.string.isRequired,
    reserved: PropTypes.bool,
  }).isRequired,
};

export default Rocket;
