import axios from "axios";

export async function getStudents() {
  const { data: students } = await axios.get("/api/students");
  // ES6 destructuring & aliasing
  const data = students.map((l) => ({
    id:l.id,
    name:l.name,
  }));
  return data;
}

export async function addStudents (input) {
    await axios.post("/api/students", {
        name: input
    });
}