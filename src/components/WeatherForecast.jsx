import React from 'react';

import DailyForecast from './DailyForecast';

function WeatherForecast({ forecastDetails }) {
    console.log(forecastDetails);

    return (
        forecastDetails.list
        ? <ul className="weather-forecast-field">
           <DailyForecast item='8' forecast={forecastDetails}/>
            <DailyForecast item='16' forecast={forecastDetails}/>
            <DailyForecast item='16' forecast={forecastDetails}/>
        </ul>
        : null
    )
}

export default WeatherForecast
