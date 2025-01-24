const express = require("express");

const app = express();

const path = require("path");

app.use("/libs", express.static("node_modules"));
//app.use("/libs", express.static(path.join(__dirname, "node_modules"))); böyle de kullanabilrsin.

app.use("/static", express.static("public"));

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
