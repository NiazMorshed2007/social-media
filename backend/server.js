const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();
const usersRouter = require("./routes/users");

const port = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected");
  })
  .catch(() => {
    console.log("connection failed");
  });

mongoose.connection.on("connected", () => {
  console.log("successfull");
});

app.get("/", (_, res) => {
  res.json("Welcome to the server");
});

app.use("/users", usersRouter);

app.listen(port, () => {
  console.log("The server is running on => localhost:" + port);
});
