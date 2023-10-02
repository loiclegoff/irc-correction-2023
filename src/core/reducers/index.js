import { combineReducers } from 'redux';
import { robotsReducer } from './robots.reducer';

const globalReducer = combineReducers({
  robotsReducer: robotsReducer,
});

export default globalReducer;
