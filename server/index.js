require("dotenv").config();
const express = require("express"),
  bodyParser = require("body-parser"),
  port = process.env.PORT || 3003,
  app = express(),
  path = require("path");

app.use(express.static(path.join(__dirname + "/../build")));
app.use(bodyParser.json());

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/../build"));
});

app.listen(port, () => {
  console.log("Server listening on port", port);
});
