import {
  useState,
  useEffect,
  useRef
} from 'react';
// import logo from './logo.svg';
import './App.css';
import {
  getStudents,
  getPosts
} from './utils';
import UserInput from './components/UserInput';
import Map from './components/Map';
import Results from './components/Results'
import 'bootstrap/dist/css/bootstrap.min.css';
import getAddress from "./utils/geo.js"



function App() {
  const [currentLocation, setCurrentLocation] = useState(null);
  const [students, setStudents] = useState([]);
  const [posts, setPosts] = useState([]);
  const [render, setRender] = useState(false);
  const [address, setAddress] = useState([]);
  const [myPost, setMyPost] = useState([])
  //getting data from database
  useEffect(() => getStudents().then(data => setStudents(data)), [])
  useEffect(() => getPosts().then(data => setPosts(data)), [])
  useEffect(() => {
    Promise.all(posts.map(post => getAddress(post.lat, post.lng))).then(posts => setAddress(posts));
  }, [posts])
  useEffect(() => {
    if ("geolocation" in navigator) {
      console.log("geolocation available")
      navigator.geolocation.getCurrentPosition(function (position) {
        setCurrentLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude
        })
        console.log(currentLocation)
      });
    } else {
      console.log("Not Available");
    }
  }, []);


  return ( < div className = "App" >
    <
    header className = "App-header" >
    <
    h1 > Bartery < /h1>  < /
    header > {
      console.log("address", address)
    } < Map currentLocation = {
      currentLocation
    }
    posts = {
      posts
    }
    />   <
    UserInput students = {
      students
    }
    setStudents = {
      setStudents
    }
    posts = {
      posts
    }
    myPost = {
      myPost
    }
    setMyPost = {
      setMyPost
    }
    />

    <
    Results posts = {
      posts
    }
    address = {
      address
    }
    render = {
      render
    }
    setRender = {
      setRender
    }
    currentLocation = {
      currentLocation
    }
    /> </div > )
}

export default App;