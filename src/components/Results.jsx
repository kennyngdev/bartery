

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
              <h1>{distFromCurrentLocation(currentLocation,x.lat,x.lng)}</h1> 
              <h1>{x.name} is offering a {x.give} in return for {x.want}</h1>
              {address.length>=1 ? (<h4>{address[ind]}</h4>): null }
              <h3><a href={"mailto:"+x.email}>{x.email}</a></h3>
              {x.photo?(<img src={x.photo} alt="itemPhoto" fluid/>):null}
            </Jumbotron>))
    } else {
        return  posts.map((x,ind) =>
          (<Jumbotron>
              <img src={x.photo} alt="itemPhoto" fluid/>
              {address.length>=1 ? (<p>{address[ind]}</p>): null }
              <p>name:{x.name}</p>
              <p>email:{x.email}</p>
              <p>offering:{x.give}</p>
              <p>in return for:{x.want}</p>
            </Jumbotron>))
            } 
          }


      

export default Results