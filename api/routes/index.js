var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Express" });
});

const testAPIRouter = require("./routes/testAPI");
app.use("/testAPI", testAPIRouter);

module.exports = router;
