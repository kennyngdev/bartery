import axios from "axios";
import {
  getDistance
} from 'geolib';

axios.defaults.headers.post['Content-Type'] = 'application/json';

export async function getStudents() {
  const {
    data: students
  } = await axios.get("/api/students");
  // ES6 destructuring & aliasing
  const data = students.map((l) => ({
    id: l.id,
    name: l.name,
  }));
  return data;
}

export async function getPosts() {
  const {
    data: posts
  } = await axios.get("/api/posts");
  const data = posts.map((l) => ({
    lat: l.lat,
    lng: l.lng,
    name: l.name,
    email: l.email,
    give: l.give,
    want: l.want
  }));
  return data;
}


export async function addStudents(input) {
  await axios.post("/api/students", {
    name: input
  });
}

export async function addPost(obj) {
  await axios.post("/api/posts", {
    lat: obj.lat,
    lng: obj.lng,
    name: obj.name,
    email: obj.email,
    photo: obj.photo,
    give: obj.give,
    want: obj.want
  });
}