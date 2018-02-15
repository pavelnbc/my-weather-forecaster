import React, { Component } from 'react';
import { ControlLabel, FormControl, ListGroup, ListGroupItem } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
import PropTypes from 'prop-types';

class LeftSideBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searchValue: "Kiev"
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSend = this.handleSend.bind(this);
        this.selectLastSearch = this.selectLastSearch.bind(this);
    }

    handleChange(event) {
        this.setState({
            searchValue: event.target.value
        })
    }

    handleSend(event) {
        event.preventDefault();

        this.props.downloadWeather(this.state.searchValue);
    }

    selectLastSearch(event) {
        let attempt = event.target.closest('button').textContent;

        this.props.downloadWeather(attempt);

        this.setState({
            searchValue: attempt
        })
    }

    componentWillMount() {
        this.props.downloadWeather(this.state.searchValue)
    }

    render() {
        const { searchAttempts } = this.props;

        return(
            <aside className="left-side-bar">
                <form onSubmit={this.handleSend}>
                    <ControlLabel htmlFor="input">
                        Please, put your city name
                    </ControlLabel>
                    <FormControl
                        type="text"
                        value={this.state.searchValue}
                        placeholder="London, Paris, Rome..."
                        onChange={this.handleChange}
                    />
                    <FontAwesome name="search" onClick={this.handleSend}/>
                </form>

                <section className="last-search">
                    <ControlLabel>Last time you searched...</ControlLabel>
                    <ListGroup >
                        { searchAttempts.length
                          ? searchAttempts.map((city, index) => {
                                return <ListGroupItem key={index} onClick={this.selectLastSearch}>
                                            <FontAwesome name="map-marker"/>
                                            <span>{city}</span>
                                       </ListGroupItem>
                            })
                          : <p>Nothing yet</p>
                        }
                    </ListGroup>
                </section>
            </aside>
        )
    }
}

LeftSideBar.propTypes = {
   searchAttempts: PropTypes.array,
   downloadWeather: PropTypes.func
};

export default LeftSideBar












/*import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import { FormControl, ListGroup, ListGroupItem } from 'react-bootstrap';

class LeftSideBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searchValue: "Kiev"
        };

        this.handleInputValue = this.handleInputValue.bind(this);
        this.handleSend = this.handleSend.bind(this);
        this.handleAttempt = this.handleAttempt.bind(this);
    }

    handleInputValue(event) {
        this.setState({
            searchValue: event.target.value
        })
    }

    handleSend(event) {
        event.preventDefault();

        this.props.downloadWeather(this.state.searchValue);
    }

    handleAttempt(event) {
        let attempt = event.target.closest('button').textContent;

        this.props.downloadWeather(attempt);

        this.setState({
            searchValue: attempt
        })
    }

    componentDidMount() {
        this.props.downloadWeather(this.state.searchValue);
    }

    render() {
        let { searchAttempts } = this.props;

        return(
            <aside className="left-side-bar">
                <form onSubmit={this.handleSend}>
                    <FormControl type="text"
                                 placeholder="London, Paris, Rome"
                                 value={this.state.searchValue}
                                 onChange={this.handleInputValue}
                    />
                    <FontAwesome name="search" onClick={this.handleSend}/>
                </form>
                <ListGroup>
                    {searchAttempts.map((attempt, index) => {
                        return (
                            <ListGroupItem key={index} onClick={this.handleAttempt}>
                                <FontAwesome name="map-marker"/>
                                {attempt}
                            </ListGroupItem>
                        )
                    })}
                </ListGroup>
            </aside>
        )
    }
}*/