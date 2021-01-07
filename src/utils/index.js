import axios from "axios";
import {getBase64} from './b64'


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
    photo: l.photo,
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

async function callbackImg(file) {
  return getBase64(file);
  // console.log(result);
  // return {b64:result,type:file.type};
}

export async function addPost(obj) {
  if (obj.photo) {
    const b64Str= await callbackImg(obj.photo);
    await axios.post("/api/posts", {
      lat: obj.lat,
      lng: obj.lng,
      name: obj.name,
      email: obj.email,
      photo: `data:${obj.photo.type};base64,${b64Str}`,
      give: obj.give,
      want: obj.want
    });
  } else {
    await axios.post("/api/posts", {
      lat: obj.lat,
      lng: obj.lng,
      name: obj.name,
      email: obj.email,
      give: obj.give,
      want: obj.want
    });
  }

}

