var express = require("express");
const router = express.Router();

var { class1 } = require('../controller/controller');

router.post("/Registration",class1.Registration);
router.post("/SignIn",class1.SignIn);

module.exports = router;