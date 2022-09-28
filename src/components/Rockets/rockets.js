import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import {
  Badge, Card, Button,
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
    rocketImage: PropTypes.string.isRequired,
    reserved: PropTypes.bool,
  }).isRequired,
};

export default Rocket;
