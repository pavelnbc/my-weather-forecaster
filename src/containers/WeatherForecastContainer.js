import { connect } from 'react-redux';

import WeatherForeCast from '../components/WeatherForecast';

function mapStateToProps(state) {
    return {
        forecastDetails: state.forecastDetails
    }
}

const WeatherForecastContainer = connect(mapStateToProps)(WeatherForeCast);

export default WeatherForecastContainer