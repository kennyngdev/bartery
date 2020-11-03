import React from 'react';
import GoogleMapReact from 'google-map-react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import Container from 'react-bootstrap/Container';


const mapMarkers = (arr) => {
  if (arr) return arr.map(x=> (<Marker position={{lat:x.lat,lng:x.lng}}/>))
  console.log("input",arr)
}



const MyMapComponent = withScriptjs(withGoogleMap(({currentLocation,posts}) =>
  <GoogleMap
    defaultZoom={11}
    defaultCenter={currentLocation? currentLocation : {lat:35.6628918,lng:139.7161412}}
    bootstrapURLKeys={{
        key: "AIzaSyCq63GY3R8k9pZ8p2_Am5zN6FqPi7Hc3Q0",
        language: 'ru',
        region: 'ru',
        libraries:['places'],
      }}
    >
<Marker position={currentLocation} />
{mapMarkers(posts)}
  </GoogleMap>
))




function Map ({currentLocation, posts}) {
    const AnyReactComponent = ({ text }) => <div>{text}</div>;
    return (
        // Important! Always set the container height explicitly
  <MyMapComponent
  loadingElement={<Container style={{ height: `100%` }} />}
  containerElement={<Container style={{ height: `60vh`, width:'90%', }} />}
  mapElement={<Container style={{ height: `100%` }} />}
  currentLocation={currentLocation}
  googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCq63GY3R8k9pZ8p2_Am5zN6FqPi7Hc3Q0"
  posts={posts}
/>
    );
    }

export default Map;

            