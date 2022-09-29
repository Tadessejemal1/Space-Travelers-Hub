import missionsReducer from '../../redux/missions/missions';

describe('Testing for join mission action in missionsReducer ', () => {
  test('when the action is join mission, and the id provided is wrong, return same state', () => {
    const JOIN_MISSION = 'space-travelers/rockets/JOIN_MISSION';
    const action = { type: JOIN_MISSION, id: '2' };
    const state = [
      { id: '0', name: 'Thaicom', reserved: false },
      { id: '1', name: 'Telstar1', reserved: false },
    ];

    const result = missionsReducer(state, action);

    expect(result).toEqual(state);
  });
});

describe('Testing for leave mission action in missionsReducer ', () => {
  test('when the action is leave mission, and the id provided is wrong, return same state', () => {
    const LEAVE_MISSION = 'space-travelers/rockets/LEAVE_MISSION';
    const action = { type: LEAVE_MISSION, id: '2' };
    const state = [
      { id: '0', name: 'Thaicom', reserved: true },
      { id: '1', name: 'Telstar1', reserved: true },
    ];

    const result = missionsReducer(state, action);

    expect(result).toEqual(state);
  });
});

describe('Testing for wrong action in missionsReducer ', () => {
  test('when the action is wrong, we return the same state with no changes', () => {
    const state = [
      { id: '0', name: 'Thaicom', reserved: false },
      { id: '1', name: 'Telstar1', reserved: false },
      { id: '2', name: 'Iridium NEXT', reserved: false },
    ];

    const WRONG_ACTION = 'space-travelers/rockets/WRONG_ROCKETS';
    const action = { type: WRONG_ACTION, payload: state };

    const result = missionsReducer([], action);

    expect(result).toEqual([]);
  });
});
