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
        this.props.downloadWeather(event.target.closest('li').textContent);

        this.setState({
            searchValue: event.target.closest('li').textContent
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
                        id="input"
                        value={this.state.searchValue}
                        placeholder="London, Paris, Rome..."
                        onChange={this.handleChange}
                    />
                    <FontAwesome name="search" onClick={this.handleSend}/>
                </form>

                <section className="last-search">
                    <ControlLabel>Last time you searched...</ControlLabel>
                    <ListGroup onClick={this.selectLastSearch}>
                        { searchAttempts.length
                          ? searchAttempts.map((city, index) => {
                                return <ListGroupItem key={index}>
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

/*<ListGroupItem>London</ListGroupItem>
                        <ListGroupItem>Moscow</ListGroupItem>
                        <ListGroupItem>Paris</ListGroupItem>
                        <ListGroupItem>Budapest</ListGroupItem>
                        <ListGroupItem>Madrid</ListGroupItem>*/


LeftSideBar.propTypes = {
   downloadWeather: PropTypes.func
};

export default LeftSideBar