const { StatusCodes } = require("http-status-codes");

function pingProblemController(req, res) {
  // console.log("Ping contoller problems");
  return res.status(StatusCodes.ACCEPTED).json({
    message: "Problem contoller is up.",
  });
}

function addProblem(req, res) {}

function getProblem(req, res) {
  return res.status(StatusCodes.NOT_IMPLEMENTED).json({
    message: "NOT_IMPLEMENTED",
  });
}

function getProblems(req, res) {
  return res.status(StatusCodes.NOT_IMPLEMENTED).json({
    message: "NOT_IMPLEMENTED",
  });
}

function deleteProblem(req, res) {}

function updateProblem(req, res) {}

module.exports = {
  addProblem,
  updateProblem,
  getProblem,
  getProblems,
  deleteProblem,
  pingProblemController,
};
