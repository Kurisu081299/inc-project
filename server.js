const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors"); // Import the CORS module
const app = express();
const port = process.env.PORT || 8000;
const ejs = require('ejs');
app.set('view engine', 'ejs');

app.use((req, res, next) => {
  console.log(`Requested URL: ${req.url}`);
  next();
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var corsOptions = {
    origin: ["http://localhost:3000, http://18.191.79.11:8080"]
  };
  
  app.use(cors(corsOptions));

app.get("/", (req, res) => {
  res.send("It's working");
});

// routes should be here
const counter = require("./app/routes/counter");

//middlewares here
app.use("/api/v1/counter", counter)

//port listening
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
module.exports = app;
