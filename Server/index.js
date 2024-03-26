const express = require("express");
const { PORT } = require("./config/server.config");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

app.get("/ping", (req, res) => {
  return res.json({
    message: "Ping Check, Server/Problem service is running.",
  });
});

app.listen(PORT, (res, req) => {
  console.log("Server is up");
});
