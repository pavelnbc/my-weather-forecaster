import { DOWNLOAD_WEATHER_FORECAST } from '../actions';

function weatherForecastReducer(state = {}, action) {
    switch (action.type) {
        case DOWNLOAD_WEATHER_FORECAST:
            return action.data;

        default:
            return state

    }
}

export default weatherForecastReducer