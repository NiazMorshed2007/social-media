const express = require("express");

const port = process.env.PORT || 5000;
const app = express();

app.get("/", (_, res) => {
  res.json("Welcome to the server");
});

app.listen(port, () => {
  console.log("The server is running on => localhost:" + port);
});
