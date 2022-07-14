const User = require("../models/user.model");
const router = require("express").Router();
const checkLogin = require("../middlewares/checkLogin");
const isCurrentUser = require("../middlewares/isCurrentUser");

require("dotenv").config();

router.route("/").get((req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.get("/suggestions", isCurrentUser, (req, res) => {
  User.find()
    .then((users) => {
      if (users && users.length > 0) {
        const arr_without_me = users.filter(
          (user) => user.username !== req.username
        );
        const suggestions = arr_without_me.fol.filter((user) => {
          arr;
        });
        console.log(suggestions);
        // const max = users.length;
        // const min = 0;
        // const random_starting_point = Math.floor(
        //   Math.random() * (max - min + 1) + min
        // );
        // const ending_point = random_starting_point + 5;
        // const spec_users = users.map(({ password, _id, email, ...rest }) => {
        //   return rest;
        // });
        // const data = spec_users.slice(random_starting_point, ending_point);
        res.status(200).json(suggestions);
      } else {
        res.status(400).json("Error!!");
      }
    })
    .catch((err) => res.status(400).json("An Error occured"));
});

router.delete("/:id", checkLogin, (req, res) => {
  User.findByIdAndDelete(req.userid)
    .then(() => {
      res.status(200).json({
        message: "User deleted!",
      });
    })
    .catch(() => {
      res.json(400).json({
        message: "Something went wrong",
      });
    });
});

router.get("/:id", isCurrentUser, async (req, res) => {
  User.find({ username: req.params.id })
    .then((user) => {
      if (user && user.length > 0) {
        const spec_user = user[0];
        const data = {
          username: spec_user.username,
          userId: spec_user._id,
          name: spec_user.name,
          bio: spec_user.bio,
          followers: spec_user.followers,
          following: spec_user.following,
          isFollowsYou: spec_user.following.some(
            (u) => u.username === req.username
          )
            ? true
            : false,
          hasAccess:
            req.hasAccess && req.username === spec_user.username ? true : false,
        };
        res.status(200).json(data);
      } else {
        res.status(401).json({
          message: "This account dosen't exists",
          user: user[0],
        });
      }
    })
    .catch((err) => res.status(400).send("Err: " + err));
});

router.delete("/", (req, res) => {
  if (req.body.pass === 123456) {
    User.deleteMany()
      .then(() => {
        res.status(200).json({
          message: "All users deleted",
        });
      })
      .catch((err) => {
        res.status(400).json({
          message: "An unexected error occured: " + err,
        });
      });
  } else {
    res.status(400).json({
      message: "You're not allowed to perform this action",
    });
  }
});

module.exports = router;
