import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRockets } from '../../redux/Rockets/rockets';
import Rockets from './rockets';

const RocketContainer = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.Rockets);
  useEffect(() => {
    if (rockets.length === 0) dispatch(fetchRockets());
  });
  return (
    <div className="rockets">
      <ul>
        { rockets.map((rocket) => (<Rockets key={rocket.index} rocket={rocket} />)) }
      </ul>
    </div>
  );
};
export default RocketContainer;
