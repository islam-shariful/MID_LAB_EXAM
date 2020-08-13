var express = require("express");
//var userModel = require.main.require("./models/user");
var router = express.Router();

// /employee get
router.get("/", function (req, res) {
  if (req.session.username != null) {
    res.render("employee");
  } else {
    res.redirect("/login");
  }
});

module.exports = router;
