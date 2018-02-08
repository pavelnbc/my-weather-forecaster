import React from 'react';
import { compose, withProps } from "recompose";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import demoFancyMapStyles from 'react-google-maps/src/components/addons/demoFancyMapStyles.json';

const CityMap = compose(
    withProps({
        isMarkerShown: true,
        googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places",
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `400px` }} />,
        mapElement: <div style={{ height: `100%`, border: '1px solid lightgrey', borderRadius: '5px' }} />,
    }),
    withScriptjs,
    withGoogleMap
)((props) => {
    return (
        props.weatherData.coord
        ? <GoogleMap
                defaultZoom={9}
                center={{ lat: +props.weatherData.coord.lat, lng: +props.weatherData.coord.lon }}
                defaultOptions={{ styles: demoFancyMapStyles }}
            >
                {props.isMarkerShown && <Marker position={{ lat: +props.weatherData.coord.lat, lng: +props.weatherData.coord.lon }}/>}
            </GoogleMap>
        : <p>Loading</p>
    )
  }

);

export default CityMap

