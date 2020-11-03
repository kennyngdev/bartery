import axios from "axios";
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