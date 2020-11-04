import React,{useState, useRef} from 'react';
import GoogleMapReact from 'google-map-react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import Container from 'react-bootstrap/Container';
import Overlay from 'react-bootstrap/Overlay'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
import Modal  from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';







const mapMarkers = (arr) => {
  if (arr) return arr.map((post,showResult)=> 
  (   
      <Marker 
              onClick={()=>console.log(showResult)}
              position={{lat:post.lat,lng:post.lng}}/>
  ))
}

const MyMapComponent = withScriptjs(withGoogleMap(({currentLocation,posts,showResult}) =>
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
{mapMarkers(posts,showResult)}
  </GoogleMap>
))




function Map ({currentLocation, posts}) {

  const [resultShowed, setResultShowed] = useState(false);

  const closeResult = () => setResultShowed(false);
  const showResult = () => setResultShowed(true);
  

    return (
  <>
  <MyMapComponent
  loadingElement={<Container style={{ height: `100%` }} />}
  containerElement={<Container className="container" style={{ height: `60vh`, width:'90%', }} />}
  mapElement={<Container style={{ height: `100%` }} />}
  currentLocation={currentLocation}
  googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCq63GY3R8k9pZ8p2_Am5zN6FqPi7Hc3Q0"
  posts={posts}
  showResult={showResult}
  closeResult={closeResult}
/>
<Modal show={resultShowed} onHide={closeResult}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeResult}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
  </>
    );
    }

export default Map;

            