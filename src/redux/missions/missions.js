const JOIN_MISSION = 'space-travelers-hub/missions/JOIN_MISSION';
const LEAVE_MISSION = 'space-travelers-hub/missions/LEAVE_MISSION';
const GET_MISSIONS = 'space-travelers-hub/missions/GET_MISSIONS';
const baseURL = 'https://api.spacexdata.com/v3/missions';

// initial state
const initialState = [];

// action creators
export const joinMission = (payload) => ({
  type: JOIN_MISSION,
  payload,
});

export const leaveMission = (payload) => ({
  type: LEAVE_MISSION,
  payload,
});

export const fetchMissions = (payload) => ({
  type: GET_MISSIONS,
  payload,
});

// thunk action functions
export const fetchMissionsFromAPI = () => async (dispatch) => {
  await fetch(`${baseURL}`)
    .then((response) => response.json())
    .then((MissionsList) => {
      const arrangedList = MissionsList.map((mission) => ({
        id: mission.mission_id,
        name: mission.mission_name,
        description: mission.description,
        reserved: false,
      }));
      if (arrangedList) {
        dispatch(fetchMissions(arrangedList));
      }
    });
};

// reducer
const missionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case JOIN_MISSION:
      return [...state, action.payload];
    case LEAVE_MISSION:
      return state.filter((mission) => mission.item_id !== action.payload);
    case GET_MISSIONS:
      return [...action.payload];
    default:
      return state;
  }
};

export default missionsReducer;
