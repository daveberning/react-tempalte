import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchWeatherOnLoad } from '@/actions';

class WeatherDisplay extends Component {
  componentWillMount() {
    this.props.fetchWeatherOnLoad();
  }
  render() {
    function kelvinToFahrenheit(kDegs) {
      const fDegs = kDegs * 9 / 5 - 459.67;
      return fDegs.toFixed(2);
    }

    const weather = this.props.weather;

    if (!this.props.weather.city) {
      return <div>Loading</div>;
    } else {
      return (
        <div>
          <h2>Today's weather for {weather.city.name}</h2>
          <h4>Current temperature: {kelvinToFahrenheit(weather.list[0].main.temp)}</h4>
          <h4>{weather.list[0].weather[0].description}</h4>
        </div>
      );
    }
  }
}

const mapDispatchToProps = {
  fetchWeatherOnLoad
};

function mapStateToProps(state) {
  return { weather: state.onLoad };
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherDisplay);
