var express = require("express");
//var userModel = require.main.require("./models/user");
var router = express.Router();

// /admin get
router.get("/", function (req, res) {
  if (req.session.username != null) {
    res.render("admin");
  } else {
    res.redirect("/login");
  }
});

module.exports = router;
