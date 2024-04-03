const { StatusCodes } = require("http-status-codes");
const NOT_IMPLEMENTED = require("../errors/NotImplemented");
const NotImplemented = require("../errors/NotImplemented");

function pingProblemController(req, res) {
  // console.log("Ping contoller problems");
  return res.status(StatusCodes.ACCEPTED).json({
    message: "Problem contoller is up.",
  });
}

function addProblem(req, res, next) {
  try {
    throw new NotImplemented("add problem");
  } catch (error) {
    next(error);
  }
}

function getProblem(req, res) {
  throw new NotImplemented("get problem");
}

function getProblems(req, res) {
  throw new NotImplemented("get problem");
}

function deleteProblem(req, res) {
  throw new NotImplemented("delete problem");
}

function updateProblem(req, res) {
  throw new NotImplemented("updateProblem");
}

module.exports = {
  addProblem,
  updateProblem,
  getProblem,
  getProblems,
  deleteProblem,
  pingProblemController,
};
