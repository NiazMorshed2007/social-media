const User = require("../models/user.model");
const router = require("express").Router();

router.put("/follow", (req, res) => {
  User.findOneAndUpdate(
    { username: req.body.username },
    {
      followers: 1,
    }
  )
    .then(() => {
      res.status(200).json("You're following" + req.body.username);
    })
    .catch(() => res.status(400).json("Something went wrong."));
});

module.exports = router;
