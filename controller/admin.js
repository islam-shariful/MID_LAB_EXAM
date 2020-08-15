var express = require("express");
//var userModel = require.main.require("./models/user");
var router = express.Router();
const { body, validationResult } = require("express-validator");

// /admin/ get
router.get("/", function (req, res) {
  if (req.session.username != null) {
    res.render("admin");
  } else {
    res.redirect("/login");
  }
});
// /admin/ post
router.post("/", function (req, res) {
  res.redirect("/admin/AddEmployee");
});
// /admin/AddEmployee get
router.get("/AddEmployee", function (req, res) {
  res.render("AddEmployee");
});

// /admin/AddEmployee get
router.post(
  "/AddEmployee",
  [
    // username must not be empty
    body("uname").notEmpty().isLength({ min: 8 }),
    // password must be at least 8 chars long
    body("upassword")
      .notEmpty()
      .isLength({ min: 8 })
      .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d@$.!%*#?&]/),
    //body("confirmpassword").notEmpty().matches("upassword"),
    //body("type").notEmpty(),
    body("uphone")
      .notEmpty()
      .isDecimal()
      .isLength({ min: 11 })
      .isLength({ max: 11 }),
    body("ugender").notEmpty(),
    body("udesignation").notEmpty(),
  ],
  function (req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    var user = {
      uname: req.body.uname,
      upassword: req.body.upassword,
      uphone: req.body.uphone,
      uaddress: req.body.uaddress,
      ugender: req.body.ugender,
      udesignation: req.body.udesignation,

      //type		: req.body.type,
    };
  }
);
//employeeList
router.get("/AllEmployeeList", (req, res) => {
  res.render("employeeList"), { userList: user };
});

module.exports = router;
