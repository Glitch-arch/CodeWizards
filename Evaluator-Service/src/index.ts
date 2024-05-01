import express, {Express} from "express";

import serverConfig from "./config/server.config";
import apiRouter from "./routes";
import { sampleWorker } from "./workers/sampleWorker";
import sampleProducer from "./producers/sampleProducer";


const app: Express = express();

app.use('/api', apiRouter);


app.listen(serverConfig.PORT, () => {
    console.log("Server started on Port: "+ serverConfig.PORT );
});

sampleWorker('sampleQueue');

sampleProducer('sampleJob', {
    name: 'glitch',
    company: 'None',
    position: 'None',
    location: 'Remote'
});