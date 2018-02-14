import React from 'react';
import PropTypes from 'prop-types';

function WeatherDetails({ weatherData }) {
    let curTemp, maxTemp, minTemp, wethDescr, windSpeed, humidity, cloudiness, iconSrc;

    if (weatherData.main) {
        curTemp = Math.floor(weatherData.main.temp) <= 0
                ? Math.floor(weatherData.main.temp)
                : `+${Math.floor(weatherData.main.temp)}`;
        maxTemp = Math.floor(weatherData.main.temp_max) <= 0
                ? Math.floor(weatherData.main.temp_max)
                : `+${Math.floor(weatherData.main.temp_max)}`;
        minTemp = Math.floor(weatherData.main.temp_min) <= 0
                ? Math.floor(weatherData.main.temp_min)
                : `+${Math.floor(weatherData.main.temp_min)}`;
        wethDescr = weatherData.weather[0].description;
        windSpeed = Math.floor(weatherData.wind.speed);
        humidity = Math.floor(weatherData.main.humidity);
        cloudiness = Math.floor(weatherData.clouds.all);
        iconSrc = `https://openweathermap.org/img/w/${
            weatherData.weather[0].icon
            }.png`;
    }

    return (
        weatherData.main
        ? <section className="weather-details-field">
            <table>
                <tbody>
                    <tr className="main-weather-info">
                        <th>Current <br/> Temperature</th>
                        <th>{curTemp}&deg;C</th>
                    </tr>
                    <tr className="main-weather-info">
                        <td>Weather Description</td>
                        <td>
                            {wethDescr}
                            <img src={iconSrc} alt="weather-logo"/>
                        </td>
                    </tr>
                    <tr>
                        <td>Max. Temperature</td>
                        <td>{maxTemp}&deg;C</td>
                    </tr>
                    <tr>
                        <td>Min. Temperature</td>
                        <td>{minTemp}&deg;C</td>
                    </tr>
                    <tr>
                        <td>Wind speed</td>
                        <td>{windSpeed} m/sec</td>
                    </tr>
                    <tr>
                        <td>Humidity</td>
                        <td>{humidity}%</td>
                    </tr>
                    <tr>
                        <td>Cloudness</td>
                        <td>{cloudiness}%</td>
                    </tr>
                </tbody>
            </table>
        </section>
        : <img className="weather-details-loading" src="/img/loading.gif" alt="loading"/>
    )
}

WeatherDetails.propTypes = {
    weatherData: PropTypes.object
};

export default WeatherDetails