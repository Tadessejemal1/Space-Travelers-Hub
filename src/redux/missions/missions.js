const JOIN_MISSION = 'space-travelers-hub/missions/JOIN_MISSION';
const LEAVE_MISSION = 'space-travelers-hub/missions/LEAVE_MISSION';
const GET_MISSIONS = 'space-travelers-hub/missions/GET_MISSIONS';

const initialState = {
  missions: [],
};

export const joinMission = (mission) => ({
  type: JOIN_MISSION,
  payload: mission,
});

export const leaveMission = (mission) => ({
  type: LEAVE_MISSION,
  payload: mission,
});

export const getMissions = (missions) => ({
  type: GET_MISSIONS,
  payload: missions,
});

export const fetchMissions = () => async (dispatch) => {
  await fetch('https://api.spacexdata.com/v3/missions')
    .then((response) => response.json())
    .then((data) => {
      const missions = data.map((mission) => ({
        mission_id: mission.mission_id,
        mission_name: mission.mission_name,
        description: mission.description,
        reserved: false,
      }));
      dispatch(getMissions(missions));
    });
};

const missionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MISSIONS:
      return {
        ...state,
        missions: action.payload,
      };
    case JOIN_MISSION:
      return {
        ...state,
        missions: state.missions.map((mission) => {
          if (mission.mission_id === action.payload.mission_id) {
            return {
              ...mission,
              reserved: true,
            };
          }
          return mission;
        }),
      };
    case LEAVE_MISSION:
      return {
        ...state,
        missions: state.missions.map((mission) => {
          if (mission.mission_id === action.payload.mission_id) {
            return {
              ...mission,
              reserved: false,
            };
          }
          return mission;
        }),
      };
    default:
      return state;
  }
};

export default missionsReducer;
