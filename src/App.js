import { useState, useEffect } from "react";
import { getPosts } from "./utils";
import UserInput from "./components/UserInput";
import Map from "./components/Map";
import Results from "./components/Results";
import getAddress from "./utils/geo.js";
import ToggleButton from "react-bootstrap/ToggleButton";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [currentLocation, setCurrentLocation] = useState(null);
  const [posts, setPosts] = useState([]);
  const [render, setRender] = useState(false);
  const [address, setAddress] = useState([]);
  const [view, setView] = useState("map");

  //getting data from database
  useEffect(() => getPosts().then((data) => setPosts(data)), []); //get post objs from db
  useEffect(() => {
    Promise.all(
      posts.map((post) => getAddress(post.lat, post.lng))
    ).then((posts) => setAddress(posts));
  }, [posts]); //get addresses from db
  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(function(position) {
        setCurrentLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      });
    } else {
    }
  }, []); //get current location

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          {" "}
          <img
            className="logo"
            src="/logo.png"
            alt="logo"
          ></img>{" "}
        </h1>{" "}
      </header>{" "}
      {}
      <div className="buttons">
      <ToggleButtonGroup size="sm" type="radio" name="options" defaultValue={1}>
        <ToggleButton value={1} onChange={() => setView("map")}>
          Map View
        </ToggleButton>
        <ToggleButton value={2} onChange={() => setView("item")}>
          Item View
        </ToggleButton>
      </ToggleButtonGroup>
      <UserInput
        posts={posts}
        currentLocation={currentLocation}
        setPosts={setPosts}
      />
      </div>
      {view === "map" ? (
        <Map
          currentLocation={currentLocation}
          posts={posts}
          address={address}
        />
      ) : null}{" "}
      {view === "item" ? (
        <Results
          posts={posts}
          address={address}
          render={render}
          setRender={setRender}
          currentLocation={currentLocation}
        />
      ) : null}{" "}
    </div>
  );
}

export default App;
