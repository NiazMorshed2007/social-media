const User = require("../models/user.model");
const router = require("express").Router();

router.put("/follow", (req, res) => {
  User.findOneAndUpdate(
    { username: req.body.followingId.username },
    {
      $push: { followers: req.body.followerId },
    },
    {
      returnOriginal: false,
    }
  )
    .then(() => {
      User.findOneAndUpdate(
        { username: req.body.followerId.username },
        {
          $push: {
            following: req.body.followingId,
          },
        }
      )
        .then(() => {
          res.status(200).json("following the person");
        })
        .catch(() => {
          res.status(400).json("Something went wrong.");
        });
    })
    .catch(() => res.status(400).json("Something went wrong."));
});

module.exports = router;
