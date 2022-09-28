const FETCH_ROCKET = 'space-travelers-hub/rocketContainer/FETCH_ROCKET';
const RESERVATION = 'space-travelers-hub/rocketContainer/RESERVATION';
const CANCEL_RESERVATION = 'space-travelers-hub/rocketContainer/CANCEL_RESERVATION';
const baseURL = 'https://api.spacexdata.com/v3/rockets';

const initialState = [];

// action creators
export const rocketsFetched = (rocket) => ({
  type: FETCH_ROCKET,
  payload: rocket,
});

export const reserveRocket = (rocketId) => ({
  type: RESERVATION,
  payload: rocketId,
});

export const cancelRocketReservation = (payload) => ({
  type: CANCEL_RESERVATION,
  payload,
});

export const fetchRockets = () => async (dispatch) => {
  await fetch(baseURL)
    .then((response) => response.json())
    .then((data) => {
      const newInitializeState = data.map((rocket) => ({
        id: rocket.id,
        rocketName: rocket.rocket_name,
        description: rocket.description,
        rocketImage: rocket.flickr_images,
      }));
      dispatch({
        type: FETCH_ROCKET,
        payload: newInitializeState,
      });
    });
};

const rocketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ROCKET:
      return action.payload;
    case RESERVATION:
      return state.map((rocket) => {
        if (rocket.id === action.payload) {
          return { ...rocket, reserved: true };
        }
        return rocket;
      });
    case CANCEL_RESERVATION:
      return state.map((rocket) => {
        if (rocket.id === action.payload) {
          return { ...rocket, reserved: false };
        }
        return rocket;
      });
    default:
      return state;
  }
};

export default rocketsReducer;
