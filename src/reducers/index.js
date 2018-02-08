import weatherDataReducer from './weatherDataReducer';
import searchAttemptsReducer from './searchAttemptsReducer';

function reducer(state = {}, action) {
    return {
        weatherData: weatherDataReducer(state.weatherData, action),
        searchAttempts: searchAttemptsReducer(state.searchAttempts, action)
    }
}

export default reducer