import { ADD_CITY } from '../actions';

function searchAttemptsReducer(state = [], action) {
    switch(action.type) {
        case ADD_CITY:
            for(let i = 0; i < state.length; i++) {
                if(state[i] === action.cityName) return state;
            }

            let cityList = [action.cityName, ...state ];
            cityList.length = cityList.length <= 10 ? cityList.length : 10;
            return cityList;

        default:
            return state;
    }
}

export default searchAttemptsReducer