import React from 'react';

function Header() {
    return (
        <header className="header">
            <img src="/img/weather-logo.svg" alt="main-logo"/>
            <div className="project-description">
                <h1>Weather Forecaster</h1>
                <p>The fastest way to find out what's the weather in your city</p>
            </div>
        </header>
    )
}

export default Header