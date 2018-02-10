import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import classNames from 'classnames';

function ErrorNotification({ isError, closeNotification }) {

    let errorNotificationClass = classNames({
        'notification-is-hidden': true,
        'notification-is-visible': isError
    });

    return (
        <div className={errorNotificationClass}>
            <img src="/img/not-found.png" alt="not found"/>

            <h1>Nothing was found</h1>

            <p>We are extremely sorry, but we couldn't find anything.</p>

            <p>Possibly that happened because you've made a mistake, typing your city name.</p>

            <p>Please, try to repeat the procedure once again.</p>

            <Button bsStyle="primary" onClick={closeNotification}>Understood</Button>
        </div>
    )
}

export default ErrorNotification