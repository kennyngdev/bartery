import {useState, useEffect, useRef} from 'react';
// import logo from './logo.svg';
import './App.css';
import {getStudents } from './utils';
// import UserInput from './components/UserInput';
import Map from './components/Map';
import { geolocated } from "react-geolocated";
import location from "chrome-location"



function App() {
  const [currentLocation,setCurrentLocation] = useState(null);
  const [students,setStudents] = useState([]);
  useEffect(()=>getStudents().then(data=>setStudents(data)),[])
  useEffect(getCurrentLocation,[]);
  function getCurrentLocation () {
    if ("geolocation" in navigator) {
      console.log("Available");
      navigator.geolocation.getCurrentPosition(function(position) {
        console.log("Latitude is :", position.coords.latitude);
        console.log("Longitude is :", position.coords.longitude);
        setCurrentLocation({lat:position.coords.latitude,lng:position.coords.longitude})
      });
    } else {
      console.log("Not Available");
    }
  }

  function renderList (arrOfObj) {
    return arrOfObj.map(x=>(
      <h1>{x.name}</h1>))
  }
  return (
    <div className="App">
      <header className="App-header">
      <h1>kenny's site</h1>
      </header>
      <Map currentLocation={currentLocation}/>
      {/* <UserInput students={students} setStudents={setStudents}/> */}
      {renderList(students)}
    </div>
  );
}

export default App;
