import React from 'react';
import GoogleMapReact from 'google-map-react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"


const MyMapComponent = withScriptjs(withGoogleMap(({currentLocation}) =>
  <GoogleMap
    defaultZoom={11}
    defaultCenter={currentLocation}
    bootstrapURLKeys={{
        key: "AIzaSyCq63GY3R8k9pZ8p2_Am5zN6FqPi7Hc3Q0",
        language: 'ru',
        region: 'ru',
        libraries:['places'],
      }}
    >
<Marker position={currentLocation} />
  </GoogleMap>
))




function Map ({currentLocation}) {
    const AnyReactComponent = ({ text }) => <div>{text}</div>;
    return (
        // Important! Always set the container height explicitly
  <MyMapComponent
  loadingElement={<div style={{ height: `100%` }} />}
  containerElement={<div style={{ height: `60vh`, width:'60%' }} />}
  mapElement={<div style={{ height: `100%` }} />}
  currentLocation={currentLocation}
  googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCq63GY3R8k9pZ8p2_Am5zN6FqPi7Hc3Q0"
/>

    );
    }

export default Map;

            // {/* <AnyReactComponent
            //   lat={currentLocation.lat}
            //   lng={currentLocation.lng}
            //   text="Current Location"
            // /> */}