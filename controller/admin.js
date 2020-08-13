var express = require("express");
//var userModel = require.main.require("./models/user");
var router = express.Router();

// /admin get
router.get("/", function (req, res) {
  if (req.session.username != null) {
    res.render("admin");
    console.log("username != null");
  } else {
    res.redirect("/login");
    console.log("username == null");
  }
});

module.exports = router;
