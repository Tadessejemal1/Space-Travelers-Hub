import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import Missions from '../components/Missions/missions';
import Rockets from '../components/Rockets/rockets';
import Profile from '../components/Profile/profile';

const rootReducer = combineReducers({
  Missions,
  Rockets,
  Profile,
});

const store = createStore(rootReducer, applyMiddleware(logger, thunk));

export default store;
