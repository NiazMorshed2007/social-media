const User = require("../models/user.model");
const router = require("express").Router();
const isCurrentUser = require("../middlewares/isCurrentUser");

router.get("/me", isCurrentUser, async (req, res) => {
  const returned_username = req.username;
  User.find({ username: returned_username })
    .then((user) => {
      if (user && user.length > 0) {
        const current_user = user[0];
        const data = {
          username: current_user.username,
          email: current_user.email,
          userId: current_user._id,
          name: current_user.name,
          bio: current_user.bio,
        };
        res.status(200).json(data);
      } else {
        res.status(401).json({
          message: "An unexpected error encountered!",
        });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json({
        message: "An unexpected error occured",
        username: returned_username,
      });
    });
});

module.exports = router;
