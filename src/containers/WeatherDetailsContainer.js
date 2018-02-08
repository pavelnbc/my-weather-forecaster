import { connect } from 'react-redux';

import WeatherDetails from '../components/WeatherDetails';

function mapStateToProps(state) {
    return {
        weatherData: state.weatherData
    }
}

const WeatherDetailsContainer = connect(mapStateToProps)(WeatherDetails);

export default WeatherDetailsContainer