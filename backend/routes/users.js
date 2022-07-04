const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
const router = require("express").Router();
const bcrypt = require("bcrypt");
const checkLogin = require("../middlewares/checkLogin");
const isCurrentUser = require("../middlewares/isCurrentUser");

require("dotenv").config();

router.route("/").get((req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error: " + err));
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
        const data = {
          username: user[0].username,
          userId: user[0]._id,
          name: user[0].name,
          hasAccess: req.hasAccess ? true : false,
        };
        res.status(200).json(data);
      } else {
        res.status(401).json({
          message: "This account dosen't exists",
        });
      }
    })
    .catch((err) => res.status(400).send("Err: " + err));
});

router.post("/signup", async (req, res) => {
  try {
    const { username, name, email, password } = req.body;
    const hashedPass = await bcrypt.hash(password, 10);
    const newUser = new User({
      username,
      name,
      email,
      password: hashedPass,
    });
    newUser
      .save()
      .then(() => {
        res.json("User Added");
      })
      .catch((err) => res.status(400).json("Error: " + err));
  } catch {
    res.status(500).json({
      message: "Authentication Failed!",
    });
  }
});

router.post("/login", async (req, res) => {
  try {
    const user = await User.find({ username: req.body.username });
    if (user && user.length > 0) {
      const isValidPassword = await bcrypt.compare(
        req.body.password,
        user[0].password
      );
      if (isValidPassword) {
        const token = jwt.sign(
          {
            username: user[0].username,
            userId: user[0]._id,
          },
          process.env.JWT_SECRET,
          {
            expiresIn: "1h",
          }
        );
        res.status(200).json({
          token: token,
          message: "Login successful",
        });
      } else {
        res.status(400).json({
          message: "Authentication Failure!",
        });
      }
    } else {
      res.status(401).json({
        error: "Authentication failed!",
      });
    }
  } catch {
    res.status(400).json({
      message: "Authentication Failed!",
    });
  }
});

module.exports = router;
