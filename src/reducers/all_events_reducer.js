import { FETCH_ALL_EVENTS } from '@/actions/events/fetch_all_events';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_ALL_EVENTS:
      return (state = action.payload);
    default:
      return state;
  }
}
