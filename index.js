const express = require("express");

const app = express();
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Hello world..!");
});

app.get("/news", (req, res) => {
  res.send("News");
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
