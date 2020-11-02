import React from 'react';
import GoogleMapReact from 'google-map-react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const MyMapComponent = withScriptjs(withGoogleMap(({currentLocation}) =>
  <GoogleMap
    defaultZoom={8}
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
        <div style={{ height: '100vh', width: '100vh' }}>
                    {console.log(currentLocation)}
  <MyMapComponent
  loadingElement={<div style={{ height: `100%` }} />}
  containerElement={<div style={{ height: `400px` }} />}
  mapElement={<div style={{ height: `100%` }} />}
  currentLocation={currentLocation}
  googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCq63GY3R8k9pZ8p2_Am5zN6FqPi7Hc3Q0"
/>
            {/* <AnyReactComponent
              lat={currentLocation.lat}
              lng={currentLocation.lng}
              text="Current Location"
            /> */}
        </div>
      );
    }

export default Map;