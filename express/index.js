const express = require("express");

const app = express();

// en özel olan route en yukarıda olmalı, yoksa gitmiyor orda kalıyor.

app.use("/blogs/:id/users/:username", function (req, res) {
  console.log(req.params);
  res.send("blog detay sayfası");
});

app.use("/blogs/:id", function (req, res) {
  res.send("blog detay sayfası");
});

app.use("/blogs", function (req, res) {
  res.send("blog listesi");
});

app.use("/", function (req, res) {
  res.send("anasayfa");
});

app.listen(3210, function () {
  console.log("Server is running on port 3210");
});
