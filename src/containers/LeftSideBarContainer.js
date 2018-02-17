import { connect } from 'react-redux';

import LeftSideBar from '../components/LeftSideBar';
import { downloadWeatherData } from '../actions';

function mapStateToProps(state) {
    return {
        searchAttempts: state.searchAttempts
    }
}

function mapDispatchToProps(dispatch) {
    return {
        downloadWeather: (cityName) => dispatch(downloadWeatherData(cityName))
    }
}

const LeftSideBarContainer  = connect(mapStateToProps, mapDispatchToProps)(LeftSideBar);

export default LeftSideBarContainer
