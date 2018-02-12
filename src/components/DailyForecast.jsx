import React from 'react';

function DailyForecast({ day, tMin, tMax, icon }) {
    let week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    let date = new Date(day * 1000);

    return (
        <li className="forecast">
            <h3>{week[date.getDay()]}</h3>
            <div>
                <span>{Math.floor(tMin)}</span><span>{Math.floor(tMax)}</span><span><img src={`https://openweathermap.org/img/w/${icon}.png`} alt=""/></span>
            </div>
        </li>
    )
}



export default DailyForecast