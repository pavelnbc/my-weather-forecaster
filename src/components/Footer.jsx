import React from 'react';

function Footer() {
    return (
        <footer className="footer">
            <p>Weather Forecaster All Rights Reserved &copy;{new Date().getFullYear()}</p>
        </footer>
    )
}

export default Footer