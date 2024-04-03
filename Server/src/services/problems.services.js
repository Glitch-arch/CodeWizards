const markdownSantizer = require("../utils/markdownSanitizer");

class problemsService {
  constructor(problemRepository) {
    this.problemRepository = problemRepository;
  }
  //   Add / create Problem
  //   i/p -> service layer -> Store to DB
  async createProblem(problemData) {
    try {
      console.log("service layer data ", problemData);
      problemData.description = markdownSantizer(problemData.description);
      const problem = await this.problemRepository.createProblem(problemData);
      console.log(problem);
      return problem;
    } catch (error) {
      console.log("Service error", error);
      throw new error();
    }
  }
}

module.exports = problemsService;
