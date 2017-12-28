import { combineReducers } from 'redux';
import OnLoadReducer from './on_load_reducer';
import AllEventsReducer from './all_events_reducer';

const rootReducer = combineReducers({
  onLoad: OnLoadReducer,
  allEvents: AllEventsReducer
});

export default rootReducer;
