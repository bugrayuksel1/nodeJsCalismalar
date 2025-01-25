const express = require("express");
const router = express.Router();
const path = require("path");

router.use("/blogs/:id", function (req, res) {
  res.render("users/blog-detail");
});

router.use("/blogs", function (req, res) {
  res.render("users/blogs");
});

router.use("/", function (req, res) {
  res.render("users/index");
});

module.exports = router;
