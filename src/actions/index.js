import axios from 'axios';

export const ADD_CITY = 'ADD_CITY';
export const DOWNLOAD_WEATHER_DATA = 'DOWNLOAD_WEATHER_DATA';

export function downloadWeatherData(cityName) {
    return (dispatch) => {
        return axios.post(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=873c01c831082a9acedd262b863a707d&units=metric`)
            .then(response => response.data)
            .then(data => dispatch({
                type: DOWNLOAD_WEATHER_DATA,
                data
            }))
            .then(() => {
                dispatch({type: ADD_CITY, cityName})
            })
            .catch((error) => console.log(error))
    }

}