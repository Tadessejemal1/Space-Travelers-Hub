const JOIN_MISSION = 'space-travelers-hub/missions/JOIN_MISSION';
const LEAVE_MISSION = 'space-travelers-hub/missions/LEAVE_MISSION';
const GET_MISSIONS = 'space-travelers-hub/missions/GET_MISSIONS';
const baseURL = 'https://api.spacexdata.com/v3/missions';

const initialState = [];

export const joinMission = (id) => ({
  type: JOIN_MISSION,
  id,
});

export const leaveMission = (id) => ({
  type: LEAVE_MISSION,
  id,
});

export const fetchMissions = (payload) => ({
  type: GET_MISSIONS,
  payload,
});

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

const missionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case JOIN_MISSION: {
      const newState = state.map((mission) => {
        if (mission.id !== action.id) return mission;
        return { ...mission, reserved: true };
      });
      return [...newState];
    }
    case LEAVE_MISSION: {
      const newState = state.map((mission) => {
        if (mission.id !== action.id) return mission;
        return { ...mission, reserved: false };
      });
      return [...newState];
    }
    case GET_MISSIONS:
      return [...action.payload];
    default:
      return state;
  }
};

export default missionsReducer;
