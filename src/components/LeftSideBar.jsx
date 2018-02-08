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
        this.props.downloadWeather(event.target.innerHTML);

        this.setState({
            searchValue: event.target.innerHTML
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
                    <ControlLabel>
                        Please, put down your city name
                    </ControlLabel>
                    <FormControl
                        type="text"
                        value={this.state.searchValue}
                        inputRef={(input) => this.cityName = input}
                        onChange={this.handleChange}
                    />
                    <FontAwesome name="send" onClick={this.handleSend}/>
                </form>

                <section className="last-search">
                    <h5>Last time you searched...</h5>
                    <ListGroup onClick={this.selectLastSearch}>
                        { searchAttempts.length
                          ? searchAttempts.map((city, index) => {
                                return <ListGroupItem key={index}>{city}</ListGroupItem>
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