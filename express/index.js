const express = require("express");

const app = express();

// en özel olan route en yukarıda olmalı, yoksa gitmiyor orda kalıyor.

const path = require("path");

app.use("/blogs/:id", function (req, res) {
  console.log(__dirname);
  console.log(__filename);

  res.sendFile(path.join(__dirname, "views/users", "blog-details.html"));
});

app.use("/blogs", function (req, res) {
  res.sendFile(path.join(__dirname, "views/users", "blogs.html"));
});

app.use("/", function (req, res) {
  res.sendFile(path.join(__dirname, "views/users", "index.html"));
});

app.listen(3210, function () {
  console.log("Server is running on port 3210");
});
