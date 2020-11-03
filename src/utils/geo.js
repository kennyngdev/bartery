import Geocode from "react-geocode";

Geocode.setLanguage("en");
Geocode.setApiKey("AIzaSyCq63GY3R8k9pZ8p2_Am5zN6FqPi7Hc3Q0");

function getAddress(lat,lng) {
    console.log("hi")
    return Geocode.fromLatLng(String(lat), String(lng)).then(
        response => {
          const address = response.results[0].formatted_address;
          console.log(address);
        },
        error => {
          console.error(error);
        }
      );
}




export default getAddress;