const fs = require("fs");
const path = require("path");
const express = require("express");
const { animals } = require("./data/animals.json");

const PORT = process.env.PORT || 3002;
const app = express();

// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());
// middleware that makes certain files readily available
app.use(express.static("public"));

app.get("/api/animals/", (req, res) => {
  let results = animals;
  if (req.query) {
    results = filteredByQuery(req.query, results);
  }
  res.json(results);
});

app.get("/api/animals/:id", (req, res) => {
  const result = findById(req.params.id, animals);
  if (result) {
    res.json(result);
  } else {
    res.send(404);
  }
});

// enables html to submit and create new data
app.post("/api/animals", (req, res) => {
  // set id based on what the next index of the array will be
  req.body.id = animals.length.toString();

  // if any data in req.body is incorrect, send 400 error back
  if (!validateAnimal(req.body)) {
    res.status(400).send("The animal is not properly formatted.");
  } else {
    const animal = createNewAnimal(req.body, animals);
    res.json(animal);
  }
});
// get index html and open route to animals
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});
// get animal html and open route to animals
app.get("/animals", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/animals.html"));
});

app.get("/zookeepers", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/zookeepers.html"));
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});

app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});
