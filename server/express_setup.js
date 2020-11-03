const express = require("express");
const port = process.env.PORT || 6969;
const knex = require("knex");
const config = require("../knexfile.js");
const morgan = require("morgan");
const path = require("path");
const db = require("./db_connect.js");
const bodyParser = require('body-parser');
const app = express();
const methodOverride = require("method-override");


app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));
// app.use(express.json())
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.resolve(__dirname, "..", "build")));

app.use(methodOverride('_method'));

app.post("/api/students", async (req, res) => {
  console.log(req.body)
  db('students').insert({
    name: req.body.name
  }).then(res.send(req.body.name));
});

app.post("/api/posts", async (req, res) => {
  console.log(req.body)
  db('userpost').insert({
    lat: req.body.lat,
    lng: req.body.lng,
    name: req.body.name,
    email: req.body.email,
    photo: req.body.photo,
    give: req.body.give,
    want: req.body.want
  }).then(res.send("instance added to database!"));
});

// table.increments().index();
// table.float("lat");
// table.float("lng");
// table.text("name").notNullable();
// table.text("email").notNullable();
// table.binary('photo');
// table.text("give").notNullable();
// table.text("want").notNullable();



app.get("/api/students", async (req, res) => {
  try {
    const students = await db.select().table("students");
    res.json(students);
  } catch (err) {
    console.error("Error loading students!", err);
    res.sendStatus(500);
  }
});

app.get("/api/posts", async (req, res) => {
  try {
    const posts = await db.select().table("userpost");
    res.json(posts);
  } catch (err) {
    console.error("Error loading students!", err);
    res.sendStatus(500);
  }
});



app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "..", "build", "index.html"));
});



module.exports = app;