import express from "express";

import { addSubmission } from "../../controllers/submission.Controller";
import { submissionDtoZodSchema } from "../../dtos/submission.Dto";
import { validate } from "../../validators/zod.Validators";


const submissionRouter = express.Router();

submissionRouter.post(
    '/', 
    validate(submissionDtoZodSchema),
    addSubmission
);

export default submissionRouter;