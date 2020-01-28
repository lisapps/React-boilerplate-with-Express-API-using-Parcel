var express = require("express");
var router = express.Router();
// var app = express();

/* GET home page. */
router.get("/", function(req, res) {
  //no render
  next(err);
});

const testAPIRouter = require("./testAPI");
router.use("/testRoute", testAPIRouter);

module.exports = router;
