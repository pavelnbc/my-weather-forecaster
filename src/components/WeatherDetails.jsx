import React from 'react';

function WeatherDetails({ weatherData }) {
    return (
        weatherData.main
        ? <section className="weather-details-field">
            <table>
                <tbody>
                    <tr className="main-weather-info">
                        <th>Current <br/> Temperature</th>
                        <th>{weatherData.main.temp.toFixed(0)}&deg;C</th>
                    </tr>
                    <tr className="main-weather-info">
                        <td>Weather Description</td>
                        <td>
                            {weatherData.weather[0].description}
                            <img src={`https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`} alt="weather-logo"/>
                        </td>
                    </tr>
                    <tr>
                        <td>Max. Temperature</td>
                        <td>{weatherData.main.temp_max}&deg;C</td>
                    </tr>
                    <tr>
                        <td>Min. Temperature</td>
                        <td>{weatherData.main.temp_min}&deg;C</td>
                    </tr>
                    <tr>
                        <td>Wind speed</td>
                        <td>{weatherData.wind.speed} m/sec</td>
                    </tr>
                    <tr>
                        <td>Humidity</td>
                        <td>{weatherData.main.humidity}%</td>
                    </tr>
                    <tr>
                        <td>Cloudness</td>
                        <td>{weatherData.clouds.all}%</td>
                    </tr>
                </tbody>
            </table>
        </section>
        : <p>Loading...</p>
    )
}

export default WeatherDetails