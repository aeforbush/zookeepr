const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');
const fs = require("fs");
const path = require("path");
const express = require("express");
const { animals } = require("./data/animals.json");

const PORT = process.env.PORT || 3002;
// app represents a signle instance of the Express.js server (variable that creates endpoints)
const app = express();


// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());
app.use('/api', apiRoutes);
app,use('/', htmlRoutes);
// middleware that makes certain files readily available
app.use(express.static("public"));



