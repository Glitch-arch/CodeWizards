const { StatusCodes } = require("http-status-codes");
const NotImplemented = require("../errors/NotImplemented");
const { ProblemsService } = require("../services");
const { ProblemsRepository } = require("../repositories");

const problemService = new ProblemsService(new ProblemsRepository());

function pingProblemController(req, res) {
  // console.log("Ping contoller problems");
  return res.status(StatusCodes.ACCEPTED).json({
    message: "Problem contoller is up.",
  });
}

async function addProblem(req, res, next) {
  try {
    const { data } = req.body;
    console.log("data from postman", data);
    const problemCreation = await problemService.createProblem(data);
    return res.status(StatusCodes.ACCEPTED).json({
      message: "Problem Created",
      questionId: problemCreation._id,
    });
  } catch (error) {
    console.log("error", error);
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
