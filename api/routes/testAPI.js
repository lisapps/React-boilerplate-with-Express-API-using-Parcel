var express = require("express");
var testAPI = express.Router();
// uncomment to begin using request in routes
// const request = require("request");

testAPI.get("/", (req, res) => {
  res.send({
    text: "We are getting data from API with React async and hooks!"
  });
});

module.exports = testAPI;
