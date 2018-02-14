import React from 'react';

import DailyForecast from './DailyForecast';

function WeatherForecast(props) {                   // props = {forecastDetails}
    return (
        props.forecastDetails.list
        ? <ul className="weather-forecast-field">
           <DailyForecast item='8' {...props}/>
            <DailyForecast item='16' {...props}/>
            <DailyForecast item='24' {...props}/>
        </ul>
        : null
    )
}

export default WeatherForecast
