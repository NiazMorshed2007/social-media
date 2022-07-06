const User = require("../models/user.model");
const router = require("express").Router();

router.put("/follow", (req, res) => {
  let prev_followers = [];
  User.find({ username: req.body.username })
    .then((user) => {
      prev_followers = user[0].followers;
    })
    .catch(() => {
      res.status(400).json("This action can't be done");
    });
  prev_followers.push(req.body.followerId);
  User.findOneAndUpdate(
    { username: req.body.username },
    {
      followers: prev_followers,
    },
    {
      returnOriginal: false,
    }
  )
    .then(() => {
      res.status(200).json({
        message: "You're following" + req.body.username,
        followers: prev_followers,
      });
    })
    .catch(() => res.status(400).json("Something went wrong."));
});

module.exports = router;
