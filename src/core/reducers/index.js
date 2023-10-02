import { combineReducers } from 'redux';
import { robotsReducer } from './robots.reducer';
import { partsReducer } from './parts.reducer';

const globalReducer = combineReducers({
  robotsReducer: robotsReducer,
  partsReducer: partsReducer,
});

export default globalReducer;
