import weatherDataReducer from './weatherDataReducer';
import searchAttemptsReducer from './searchAttemptsReducer';
import errorReducer from './errorReducer';

function reducer(state = {}, action) {
    return {
        weatherData: weatherDataReducer(state.weatherData, action),
        searchAttempts: searchAttemptsReducer(state.searchAttempts, action),
        isError: errorReducer(state.isError, action)
    }
}

export default reducer