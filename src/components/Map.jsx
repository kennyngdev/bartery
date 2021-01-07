import React, { useState } from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";
import Container from "react-bootstrap/Container";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "../css/Map.css";


function Map({ currentLocation, posts, address}) {
  const [resultShowed, setResultShowed] = useState(false);
  const [selected, setSelected] = useState(0);
  const closeResult = () => setResultShowed(false);
  const showResult = () => setResultShowed(true);

  const mapMarkers = (arr) => {
    if (arr)
      return arr.map((post, showResult) => (
        <Marker
          onClick={() => {
            setSelected(showResult);
            setResultShowed(true);
          }}
          position={{ lat: post.lat, lng: post.lng }}
        />
      ));
  };

  const MyMapComponent = withScriptjs(
    withGoogleMap(({ currentLocation, posts, showResult }) => (
      <GoogleMap
        defaultZoom={11}
        defaultCenter={
          currentLocation
            ? currentLocation
            : { lat: 35.6628918, lng: 139.7161412 }
        }
        bootstrapURLKeys={{
          key: "AIzaSyCq63GY3R8k9pZ8p2_Am5zN6FqPi7Hc3Q0",
          language: "ru",
          region: "ru",
          libraries: ["places"],
        }}
      >
        <Marker position={currentLocation} />
        {mapMarkers(posts, showResult)}
      </GoogleMap>
    ))
  );

  return (
    <>
      {console.log(posts[selected])}
      <MyMapComponent
        loadingElement={<Container style={{ height: `100%` }} />}
        containerElement={
          <Container
            className="container"
            style={{ height: `70vh`, width: "90%" }}
          />
        }
        mapElement={<Container style={{ height: `100%` }} />}
        currentLocation={currentLocation}
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCq63GY3R8k9pZ8p2_Am5zN6FqPi7Hc3Q0"
        posts={posts}
        showResult={showResult}
        closeResult={closeResult}
      />
      {posts.length!==0 ? (
        <Modal dialogClassName="popUp" show={resultShowed} onHide={closeResult} centered>
          <Modal.Header closeButton>
            <Modal.Title>Post from {posts[selected].name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {posts[selected].photo?(<img  src={posts[selected].photo} alt="itemPhoto" fluid/>):null}
            <h1  >{posts[selected].name} is offering a {posts[selected].give} in return for a {posts[selected].want}</h1>
            <h2  ><a href={"mailto:"+posts[selected].email}>{posts[selected].email}</a></h2>
            {address && address.length>=1 ? (<h3 >{address[selected]}</h3>): null }
            </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={closeResult}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      ) : null}{" "}
    </>
  );
}

export default Map;
