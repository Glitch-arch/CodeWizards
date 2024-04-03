const express = require("express");
const { PORT } = require("./config/server.config");
const bodyParser = require("body-parser");
const apiRouter = require("./routes");
// const BaseError = require("./errors/BaseError");
const errorHandler = require("./utils/errorHandler");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

app.get("/ping", (req, res) => {
  return res.json({
    message: "Ping Check, Server/Problem service is running.",
  });
});

app.use("/api", apiRouter);

app.use(errorHandler);
app.listen(PORT, (res, req) => {
  console.log("Server is up");

  // throw new BaseError("Some Error", 404, "Something went wrong");
});
