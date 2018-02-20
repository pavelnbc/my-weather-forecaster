import React from 'react';

function DailyForecast({ item, forecastDetails }) {
    let week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    let date = new Date(forecastDetails.list[item].dt).getDay();
    let minTemp = Math.floor(forecastDetails.list[item].main.temp_min) <= 0
            ? Math.floor(forecastDetails.list[item].main.temp_min)
            : `+${Math.floor(forecastDetails.list[item].main.temp_min)}`;
    let maxTemp = Math.floor(forecastDetails.list[item].main.temp_max) <= 0
            ? Math.floor(forecastDetails.list[item].main.temp_max)
            : `+${Math.floor(forecastDetails.list[item].main.temp_max)}`;
    let iconSrc = `https://openweathermap.org/img/w/${
        forecastDetails.list[item].weather[0].icon
        }.png`;

    return (
        <li className="forecast">
            <h3>{week[date]}</h3>
            <span>{minTemp}</span>
            <span>...</span>
            <span>{maxTemp}</span>
            <span>
                <img src={iconSrc} alt="weatherIcon"/>
            </span>
        </li>
    )
}



export default DailyForecast