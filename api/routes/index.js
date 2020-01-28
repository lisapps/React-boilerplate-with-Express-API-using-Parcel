var express = require("express");
var router = express.Router();
// var app = express();

router.get("/", function(req, res) {
  //no render
  next(err);
});

const testAPIRouter = require("./testAPI");
router.use("/testRoute", testAPIRouter);

module.exports = router;
