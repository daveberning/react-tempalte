import axios from 'axios';

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(cityName) {
  const url = `http://api.openweathermap.org/data/2.5/forecast?appid=fe0fca9d42434d4adaa11171e518fc7f&q=${cityName},us`;
  const response = axios.get(url);

  return dispatch => {
    response.then(({ data }) => {
      dispatch({ type: FETCH_WEATHER, payload: data });
    });
  };
}
