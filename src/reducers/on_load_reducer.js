import { ON_LOAD } from '../actions/onLoad/fetch_weather_on_load';

export default function(state = {}, action) {
  switch (action.type) {
    case ON_LOAD:
      return (state = action.payload);
    default:
      return state;
  }
}
