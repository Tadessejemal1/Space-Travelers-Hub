import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import missionsReducer, { fetchMissionsFromAPI } from './missions/missions';
import rocketsReducer from './Rockets/rockets';

const rootReducer = combineReducers({
  missionsReducer,
  Rockets: rocketsReducer,
});

const store = createStore(rootReducer, applyMiddleware(logger, thunk));
store.dispatch(fetchMissionsFromAPI());

export default store;
