const express = require("express");

const app = express();

// Middleware
app.use(function (req, res, next) {
  console.log("Middleware 1");
  next();
});

app.use(function (req, res, next) {
  console.log("Middleware 2");
  next();
});

app.use(function (req, res, next) {
  console.log("Middleware 3");
  res.send("Hello World");
});

app.listen(3210, function () {
  console.log("Server is running on port 3210");
});
