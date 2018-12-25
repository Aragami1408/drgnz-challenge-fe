import { combineReducers } from 'redux';
import system from './system';
import auth from './auth';
import stages from './stages';
import level from './level';
import stage from './stage';

export const REHYDRATION_COMPLETE = 'REHYDRATION_COMPLETE';
export const SET_TOP_HISTORY_COMPLETE = 'SET_TOP_HISTORY_COMPLETE';

export default combineReducers({
  system,
  auth,
  stages,
  level,
  stage,
});
