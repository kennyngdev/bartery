import {
  useState,
  useEffect,
  useRef
} from 'react';
// import logo from './logo.svg';
import './App.css';
import {
  getPosts
} from './utils';
import UserInput from './components/UserInput';
import Map from './components/Map';
import Results from './components/Results'
import 'bootstrap/dist/css/bootstrap.min.css';
import getAddress from "./utils/geo.js"


function App() {
  const [currentLocation, setCurrentLocation] = useState(null);
  const [posts, setPosts] = useState([]);
  const [render, setRender] = useState(false);
  const [address, setAddress] = useState([]);
  const [myPost, setMyPost] = useState(false)
  //getting data from database
  useEffect(() => getPosts().then(data => setPosts(data)), []) //get post objs from db
  useEffect(() => {
    Promise.all(posts.map(post => getAddress(post.lat, post.lng))).then(posts => setAddress(posts));
  }, [posts,myPost]) //get addresses from db
  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(function (position) {
        setCurrentLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude
        })
      });
    } else {
    }
  }, []); //get current location


  return ( < div className = "App" >
    <
    header className = "App-header" >
    <
    h1 > <img className="logo" className="logo" width="30" height="30" src="/logo.png" alt="logo"></img> < /h1>  < /
    header > {
    } < Map currentLocation = {
      currentLocation
    }
    posts = {
      posts
    }
    /> <UserInput 
    posts = {
      posts
    }
    myPost = {
      myPost
    }
    setMyPost = {
      setMyPost
    }
    currentLocation = {
      currentLocation
    }
    myPost = 
    {myPost}
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