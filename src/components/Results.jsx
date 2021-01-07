

import Jumbotron from 'react-bootstrap/Jumbotron';
import { getDistance } from 'geolib';

function Results ({currentLocation,posts, address}) {


    function distFromCurrentLocation (current,lat,lng) {
        const result =  getDistance({latitude:current.lat,longitude:current.lng},
                                   {latitude:lat,longitude:lng});
        if (result<1000) return  `${result}m from you`;
        else return `${result/1000}km from you`;
      }
    if (currentLocation) {
        return  posts.map((x,ind)=>
          (<Jumbotron>
              {x.photo?(<img src={x.photo} alt="itemPhoto" fluid/>):null}
              {x.lat&&x.lng?<h2>{distFromCurrentLocation(currentLocation,x.lat,x.lng)}</h2>: null}
              <h2>{x.name} is offering a {x.give} in return for a {x.want}</h2>
              <h3><a href={"mailto:"+x.email}>{x.email}</a></h3>
              {address && address.length>=1 ? (<h4>{address[ind]}</h4>): null }
            </Jumbotron>))
    } else {
        return  posts.map((x,ind) =>
          (<Jumbotron>
              {x.photo?(<img src={x.photo} alt="itemPhoto" fluid/>):null}
              <h2>{x.name} is offering a {x.give} in return for a {x.want}</h2>
              <h3><a href={"mailto:"+x.email}>{x.email}</a></h3>
              {address && address.length>=1 ? (<p>{address[ind]}</p>): null }
            </Jumbotron>))
            } 
          }


      

export default Results