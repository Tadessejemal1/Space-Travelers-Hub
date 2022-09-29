import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import {
  Badge, Card, Button,
} from 'react-bootstrap';
import { reserveRocket, cancelRocketReservation } from '../../redux/Rockets/rockets';

const Rocket = ({ rocket }) => {
  const dispatch = useDispatch();
  const {
    id, rocketName, description, rocketImage, reserved,
  } = rocket;
  const handleReserve = () => {
    if (!reserved) {
      dispatch(reserveRocket(rocket.id));
    } else {
      dispatch(cancelRocketReservation(rocket.id));
    }
  };
  return (
    <div className="rockets">
      <div className="rocket-card">
        <img src={rocketImage} alt="rocket" className="rocket-img" />
        <div className=" card-body">
          <Card.Title>{ rocketName }</Card.Title>
          <Card.Text>
            {reserved ? <Badge bg="info" className="me-2">Reserved</Badge> : ''}
            { description }
          </Card.Text>
          <Button className="align-self-start" variant={reserved ? 'outline-secondary' : 'primary'} id={id} onClick={handleReserve}>
            {reserved ? 'Cancel Reservation' : 'Reserve Rocket'}
          </Button>
        </div>
      </div>
    </div>
  );
};

Rocket.propTypes = {
  rocket: PropTypes.shape({
    id: PropTypes.number.isRequired,
    rocketName: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    rocketImage: PropTypes.arrayOf(PropTypes.string),
    reserved: PropTypes.bool,
  }).isRequired,
};

export default Rocket;
