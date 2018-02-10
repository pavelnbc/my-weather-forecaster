import axios from 'axios';

export const ADD_CITY = 'ADD_CITY';
export const DOWNLOAD_WEATHER_DATA = 'DOWNLOAD_WEATHER_DATA';
export const HANDLE_ERROR = 'HANDLE_ERROR';

export function downloadWeatherData(cityName) {
    return (dispatch) => {
        return axios.post(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=873c01c831082a9acedd262b863a707d&units=metric`)
            .then(response => response.data)
            .then(data => dispatch({
                type: DOWNLOAD_WEATHER_DATA,
                data
            }))
            .then(() => {
                dispatch({type: ADD_CITY, cityName})
            })
            .catch((error) => {
                console.log(error);

                dispatch(handleError())
            })
    }
}

export function handleError() {
    let bodyStyle = document.body.style;
    let contentStyle = document.getElementById('content').style;

    // bodyStyle.overflow = bodyStyle.overflow === '' ? 'hidden' : '';
    contentStyle.filter = contentStyle.filter === '' ? 'blur(7px)' : '';

    return {
        type: HANDLE_ERROR
    }
}