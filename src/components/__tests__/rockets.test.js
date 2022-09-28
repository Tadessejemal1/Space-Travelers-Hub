import rocketsReducer from '../../redux/Rockets/rockets';

describe('Testing for add reservation action in rocketsReducer ', () => {
  test('when the action is add reservation, and the id provided is wrong, return same state', () => {
    // arrange
    const RESERVATION = 'space-travelers/rockets/ADD_ROCKET_RESERVATION';
    const action = { type: RESERVATION, id: '2' };
    const state = [
      {
        id: '0',
        name: 'V3',
        reserved: false,
      },
      { id: '1', name: 'Falcon1', reserved: false },
    ];
    // act
    const result = rocketsReducer(state, action);
    // assert
    expect(result).toEqual(state);
  });
});

describe('Testing for remove reservation action in rocketsReducer ', () => {
  test('when the action is remove reservation, and the id provided is wrong, return same state', () => {
    // arrange
    const CANCEL_RESERVATION = 'space-travelers/rockets/REMOVE__ROCKET_RESERVATION';
    const action = { type: CANCEL_RESERVATION, id: '2' };
    const state = [
      {
        id: '0',
        name: 'V3',
        reserved: false,
      },
      { id: '1', name: 'Falcon1', reserved: true },
    ];
    // act
    const result = rocketsReducer(state, action);
    // assert
    expect(result).toEqual(state);
  });
});

describe('Testing for wrong action in rocketsReducer ', () => {
  test('when the action is wrong, we return the same state with no changes', () => {
    // arrange
    const state = [
      {
        id: '0',
        name: 'V3',
        reserved: false,
      },
      { id: '1', name: 'Falcon1', reserved: false },
      { id: '2', name: 'Falcon1', reserved: true },
    ];

    const WRONG_ROCKETS = 'space-travelers/rockets/WRONG_ROCKETS';
    const action = { type: WRONG_ROCKETS, payload: state };

    // act
    const result = rocketsReducer([], action);
    // assert
    expect(result).toEqual([]);
  });
});
