const router = require("express").Router();
const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

router.post("/signup", async (req, res) => {
  try {
    const { username, name, email, password, bio } = req.body;
    const hashedPass = await bcrypt.hash(password, 10);
    const newUser = new User({
      username,
      name,
      email,
      bio,
      followers: [],
      following: [],
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
            expiresIn: "10h",
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
