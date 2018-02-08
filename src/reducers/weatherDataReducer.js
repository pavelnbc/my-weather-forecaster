import {DOWNLOAD_WEATHER_DATA} from "../actions/index";

function weatherDataReducer(state = {}, action) {
    switch(action.type) {
        case DOWNLOAD_WEATHER_DATA:
            return action.data;

        default:
            return state
    }
}

export default weatherDataReducer