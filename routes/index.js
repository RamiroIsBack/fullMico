var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
    res.render("index", { title: "Express" });
});

router.get("/createferia", function(req, res, next) {
    res.render("createferia", null);
});
router.get("/deleteferia", function(req, res, next) {
    res.render("deleteferia", null);
});
module.exports = router;
