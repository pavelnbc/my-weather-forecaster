import React from 'react';

import DailyForecast from './DailyForecast';

function WeatherForecast({ forecastDetails }) {
    console.log(forecastDetails);

    return (
        forecastDetails.list
        ? <ul className="weather-forecast-field">
           <DailyForecast day={forecastDetails.list[8].dt}
                          tMin={forecastDetails.list[5].main.temp_min}
                          tMax={forecastDetails.list[5].main.temp_max}
                          icon={forecastDetails.list[5].weather[0].icon}
           />
           <DailyForecast day={forecastDetails.list[16].dt}
                          tMin={forecastDetails.list[10].main.temp_min}
                          tMax={forecastDetails.list[10].main.temp_max}
                          icon={forecastDetails.list[10].weather[0].icon}
           />
           <DailyForecast day={forecastDetails.list[24].dt}
                          tMin={forecastDetails.list[15].main.temp_min}
                          tMax={forecastDetails.list[15].main.temp_max}
                          icon={forecastDetails.list[15].weather[0].icon}
           />
        </ul>
        : null
    )
}

export default WeatherForecast