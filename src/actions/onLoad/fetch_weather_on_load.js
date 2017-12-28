import axios from 'axios';

export const ON_LOAD = 'ON_LOAD';

export function fetchWeatherOnLoad() {
  const url = `http://api.openweathermap.org/data/2.5/forecast?appid=fe0fca9d42434d4adaa11171e518fc7f&q=cincinnati,us`;
  const response = axios.get(url);

  return dispatch => {
    response.then(({ data }) => {
      dispatch({ type: ON_LOAD, payload: data });
    });
  };
}
