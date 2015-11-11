import { INCREMENT_COUNTER, DECREMENT_COUNTER } from '../constants/ActionTypes';
import { REHYDRATE_COMPLETE } from 'redux-persist/constants';
import { updateBadge } from '../actions/extension';

export default [
  {
    catch: [ INCREMENT_COUNTER, DECREMENT_COUNTER, REHYDRATE_COMPLETE ],
    dispatch: updateBadge
  }
];
