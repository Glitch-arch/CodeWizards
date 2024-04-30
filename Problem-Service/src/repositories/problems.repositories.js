const { Problem } = require("../models/index");

class problemsRepository {
  async createProblem(problemData) {
    try {
      const problem = await Problem.create({
        title: problemData.title,
        description: problemData.description,
        difficulty: problemData.difficulty,
        testCases: problemData.testCases ? problemData.testCases : [],
      });

      return problem;
    } catch (error) {
      throw new error();
    }
  }

  async getProblem(id) {
    try {
      const problem = await Problem.find({ id: id });
      return problem;
    } catch (error) {
      throw new error();
    }
  }
}

module.exports = problemsRepository;
