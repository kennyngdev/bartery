import {useState, useEffect, useRef} from 'react';
// import logo from './logo.svg';
import './App.css';
import {getStudents, getPosts } from './utils';
import UserInput from './components/UserInput';
import Map from './components/Map';
import 'bootstrap/dist/css/bootstrap.min.css';
import getAddress from "./utils/geo.js"
import { getDistance } from 'geolib';
import Jumbotron from 'react-bootstrap/Jumbotron';




function App() {
  const [currentLocation,setCurrentLocation] = useState(null);
  const [students,setStudents] = useState([]);
  const [posts,setPosts] = useState([]);
  //getting data from databse
  useEffect(()=>getStudents().then(data=>setStudents(data)),[])
  useEffect(()=>getPosts().then(data=>setPosts(data)),[])
  useEffect(()=> {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(function(position) {
      setCurrentLocation({lat:position.coords.latitude,lng:position.coords.longitude})
      });
    } else {
      console.log("Not Available");
    }
  },[]);
  
   function distFromCurrentLocation (current,lat,lng) {
    const result =  getDistance({latitude:current.lat,longitude:current.lng},
                               {latitude:lat,longitude:lng});
    if (result<1000) return  `${result}m from you`;
    else return `${result/1000}km from you`;
  }

  function renderResult () {
      return currentLocation?  posts.map(x=>
      (<div>
          <h2>{distFromCurrentLocation(currentLocation,x.lat,x.lng)}</h2>
          {console.log(getAddress(x.lat,x.lng))}
          {/* <h2>address:{getAddress(x.lat,x.lng)}</h2> */}
          <h2>name:{x.name}</h2>
          <h2>email:{x.email}</h2>
        </div>))
       : posts.map(x=>
        (<div>
            <h2>name:{x.name}</h2>
            <h2>email:{x.email}</h2>
          </div>));
      }

  return (<div className="App">
  <header className="App-header">
  <h1>kenny's site</h1>
  </header>
  <Map currentLocation={currentLocation}  posts={posts}/>
  <UserInput students={students} setStudents={setStudents} posts={posts}/>
  {/* {fetch('http://example.com/movies.json')
  .then(response => response.json())
  .then(data => console.log(data))} */}
  <Jumbotron>
  {renderResult()}
  </Jumbotron>
        </div>)
}

export default App;
