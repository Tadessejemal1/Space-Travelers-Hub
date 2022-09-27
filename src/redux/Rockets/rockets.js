import {
  createAction, createReducer, createAsyncThunk,
} from '@reduxjs/toolkit';
import axios from 'axios';

const rocketsFetched = createAction('rocketsFetched');
export const reserveRocket = createAction('rockets/rocketReserved');
export const cancelRocketReservation = createAction('rockets/rocketReservationCanceled');

export const fetchRockets = createAsyncThunk(
  'rockets/fetchRockets',
  async (param = '', thunkApi) => {
    const { dispatch } = thunkApi;
    const { data } = await axios.get(`https://api.spacexdata.com/v3/rockets${param}`);
    const rockets = data.map((rocket) => (
      {
        id: rocket.id,
        rocketName: rocket.rocket_name,
        description: rocket.description,
        rocketImage: rocket.flickr_images[0],
      }
    ));
    dispatch({
      type: rocketsFetched.type,
      payload: rockets,
    });
  },
);

const rocketsReducer = createReducer([], {
  // key: value pairs
  // actions: functions (event => event handler)
  [rocketsFetched.type]: (rockets, action) => {
    rockets.push(...action.payload);
  },
  [reserveRocket.type]: (rockets, action) => rockets.map((rocket) => {
    if (rocket.id === action.payload) return { ...rocket, reserved: true };
    return rocket;
  }),
  [cancelRocketReservation.type]: (rockets, action) => rockets.map((rocket) => {
    if (rocket.id === action.payload) return { ...rocket, reserved: false };
    return rocket;
  }),
});

export default rocketsReducer;
