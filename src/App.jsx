import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap'

import LeftSideBarContainer from './containers/LeftSideBarContainer';
import CityMapContainer from './containers/CityMapContainer';
import WeatherDetailsContainer from './containers/WeatherDetailsContainer';
import WeatherForecastContainer from './containers/WeatherForecastContainer';
import ErrorNotificationContainer from './containers/ErrorNotificationContainer';
import Content from './components/Content'
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import Anchor from './components/Anchor';

class App extends Component {
    render() {
        return (
            <main className="app">
                <ErrorNotificationContainer/>
                <Content>
                    <Header/>
                    <Grid>
                        <Row className="show-grid">
                            <Col xs={12} sm={4} md={4} lg={4}>
                                <LeftSideBarContainer/>
                            </Col>
                            <Col xs={12} sm={8} md={8} lg={8}>
                                <MainContent>
                                    <CityMapContainer/>
                                    <WeatherDetailsContainer/>
<!--                                     <WeatherForecastContainer/> -->
                                </MainContent>
                            </Col>
                        </Row>
                    </Grid>
                    <Anchor/>
                </Content>
                <Footer/>
            </main>
        )
    }
}

export default App
