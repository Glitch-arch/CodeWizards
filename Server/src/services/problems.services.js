const markdownSantizer = require("../utils/markdownSanitizer");

class problemsService {
  constructor(problemRepository) {
    this.problemRepository = problemRepository;
  }

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

  async getProblem(id) {
    const problem = await this.problemRepository.getProblem(id);

    return problem;
  }
}

module.exports = problemsService;
