var express = require("express");
//var userModel = require.main.require("./models/user");
var router = express.Router();

//get
router.get("/", function (req, res) {
  res.render("login");
});

//post
router.post("/", function (req, res) {
  //   var user = {
  //     uname: req.body.uname,
  //     password: req.body.password,
  //   };
  if (req.body.uname == "admin") {
    req.session.username = req.body.uname;
    res.redirect("/admin");
  } else if (req.body.uname == "employee") {
    req.session.username = req.body.uname;
    res.redirect("/employee");
  } else {
    res.send("invalid username/password");
  }
});

module.exports = router;
