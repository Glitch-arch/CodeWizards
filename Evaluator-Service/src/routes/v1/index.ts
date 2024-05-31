import express from "express";

import { pingCheck } from "../../controllers/pingController";
import submissionRouter from "./submission.Routes";

const v1Router = express.Router();

v1Router.get('/pingcheck', pingCheck );
v1Router.use('/submissions', submissionRouter);
export default v1Router;