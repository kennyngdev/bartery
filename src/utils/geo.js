import Geocode from "react-geocode";


Geocode.setLanguage("en");
Geocode.setApiKey("AIzaSyCq63GY3R8k9pZ8p2_Am5zN6FqPi7Hc3Q0");

async function getAddress(lat,lng) {
    console.log("hi")
    const promise =  await Geocode.fromLatLng(String(lat), String(lng))
                    .then(res=>res.results[0].formatted_address)
   
    return promise;

}




export default getAddress;