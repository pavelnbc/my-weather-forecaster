import { connect } from 'react-redux';

import CityMap from '../components/CityMap';

function mapStateToProps(state) {
    return {
        isMarkerShown: true,
        weatherData: state.weatherData
    }
}

const CityMapContainer = connect(mapStateToProps)(CityMap);

export default CityMapContainer