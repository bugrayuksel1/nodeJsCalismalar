const express = require("express");
const path = require("path");
const userRoutes = require("./routes/user");
const adminRoutes = require("./routes/admin");

const app = express();

app.use("/libs", express.static("node_modules"));
app.use("/static", express.static("public"));

app.use(adminRoutes);
app.use(userRoutes);

app.listen(3210, function () {
  console.log("Server is running on port 3210");
});
