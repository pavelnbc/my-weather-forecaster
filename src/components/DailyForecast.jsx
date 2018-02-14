import React from 'react';

function DailyForecast({ item, forecast }) {
    let week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    let date = new Date(forecast.list[item].dt * 1000).getDay();
    let minTemp = Math.floor(forecast.list[item].main.temp_min) <= 0 ? Math.floor(forecast.list[item].main.temp_min) : `+${Math.floor(forecast.list[item].main.temp_min)}`;
    let maxTemp = Math.floor(forecast.list[item].main.temp_max) <= 0 ? Math.floor(forecast.list[item].main.temp_max) : `+${Math.floor(forecast.list[item].main.temp_max)}`;
    let iconSrc = `https://openweathermap.org/img/w/${forecast.list[item].weather[0].icon}.png`;

    return (
        <li className="forecast">
            <h3>{week[date]}</h3>
            <div>
                <span>{minTemp}</span>
                <span>{maxTemp}</span>
                <span>
                    <img src={iconSrc} alt="weatherIcon"/>
                </span>
            </div>
        </li>
    )
}



export default DailyForecast