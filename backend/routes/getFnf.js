const User = require("../models/user.model");
const router = require("express").Router();

router.get("/followers", (req, res) => {
  User.find({ username: req.body.username })
    .then((user) => {
      res.status(200).json(user[0].followers);
    })
    .catch(() => {
      res.status(400).json("Can't fetch data :(");
    });
});

module.exports = router;
