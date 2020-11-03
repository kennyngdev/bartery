import axios from "axios";
import { getDistance } from 'geolib';
axios.defaults.headers.post['Content-Type'] = 'application/json';

export async function getStudents() {
  const { data: students } = await axios.get("/api/students");
  // ES6 destructuring & aliasing
  const data = students.map((l) => ({
    id:l.id,
    name:l.name,
  }));
  return data;
}

export async function getPosts() {
  const { data: posts } = await axios.get("/api/posts");
  const data = posts.map((l) => ({
    lat:l.lat,
    lng:l.lng,
    name:l.name,
    email:l.email
  }));
  return data;
}


export async function addStudents (input) {
    await axios.post("/api/students", {
        name: input
    });
}

export async function distFromCurrentLocation (currentLocation,lat,lng) {
  const result = await getDistance({latitude:currentLocation.lat,longitude:currentLocation.lng},
                             {latitude:lat,longitude:lng});
  if (result<1000) return await `${result}m from you`;
  else return await `${result/1000}km from you`;
}