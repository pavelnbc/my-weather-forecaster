import weatherDataReducer from './weatherDataReducer';
import weatherForecastReducer from './weatherForecastReducer';
import searchAttemptsReducer from './searchAttemptsReducer';
import errorReducer from './errorReducer';

function reducer(state = {}, action) {
    console.log(action);

    return {
        weatherData: weatherDataReducer(state.weatherData, action),
        searchAttempts: searchAttemptsReducer(state.searchAttempts, action),
        isError: errorReducer(state.isError, action),
        forecastDetails: weatherForecastReducer(state.forecastDetails, action)
    }
}

export default reducer