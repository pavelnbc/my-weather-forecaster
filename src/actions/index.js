import axios from 'axios';

export const ADD_CITY = 'ADD_CITY';
export const DOWNLOAD_WEATHER_DATA = 'DOWNLOAD_WEATHER_DATA';
export const DOWNLOAD_WEATHER_FORECAST = 'DOWNLOAD_WEATHER_FORECAST';
export const HANDLE_ERROR = 'HANDLE_ERROR';

//http://api.openweathermap.org/data/2.5/forecast/daily?q=".$city.",".$country."&units=metric&cnt=7&lang=en&appid=c0c4a4b4047b97ebc5948ac9c48c0559

export function downloadWeatherData(cityName) {
    return (dispatch) => {
        axios.post(`http://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=metric&apikey=873c01c831082a9acedd262b863a707d`)
            .then(response => response.data)
            .then(data => dispatch({
                type: DOWNLOAD_WEATHER_FORECAST,
                data
            }))
            .catch((error) => console.log(error));

        return axios.post(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=873c01c831082a9acedd262b863a707d`)
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

    bodyStyle.overflow = bodyStyle.overflow === '' ? 'hidden' : '';
    contentStyle.filter = contentStyle.filter === '' ? 'blur(9px)' : '';

    return {
        type: HANDLE_ERROR
    }
}