

import Jumbotron from 'react-bootstrap/Jumbotron';
import { getDistance } from 'geolib';
import getAddress from "../utils/geo.js"



function Results ({currentLocation,posts, address, render, setRender }) {


    function distFromCurrentLocation (current,lat,lng) {
        const result =  getDistance({latitude:current.lat,longitude:current.lng},
                                   {latitude:lat,longitude:lng});
        if (result<1000) return  `${result}m from you`;
        else return `${result/1000}km from you`;
      }
      console.log("currentLoca", currentLocation)
    if (currentLocation) {
        return  posts.map((x,ind)=>
          (<Jumbotron>
              <h3>{distFromCurrentLocation(currentLocation,x.lat,x.lng)}</h3>
              {address.length>=1 ? (<p>{address[ind]}</p>): console.log('norender') }
              <p>name:{x.name}</p>
              <p>email:{x.email}</p>
              <p>offering:{x.give}</p>
              <p>in return for:{x.want}</p>
            </Jumbotron>))
    } else {
        return  posts.map(x=>
          (<Jumbotron>
              <p>name:{x.name}</p>
              <p>email:{x.email}</p>
              <p>offering:{x.give}</p>
              <p>in return for:{x.want}</p>
            </Jumbotron>))
            } 
          }


      

export default Results