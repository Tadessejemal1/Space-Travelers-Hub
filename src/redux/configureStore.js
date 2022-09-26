import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import missionsReducer, { fetchMissions } from './missions/missions';

const rootReducer = combineReducers({
  missionsReducer,
});

const store = createStore(rootReducer, applyMiddleware(logger, thunk));
store.dispatch(fetchMissions());

export default store;
