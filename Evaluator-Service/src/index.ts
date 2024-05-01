import express, {Express} from "express";

import serverConfig from "./config/server.config";
import sampleProducer from "./producers/sampleProducer";
import apiRouter from "./routes";
import  sampleWorker  from "./workers/sampleWorker";


const app: Express = express();

app.use('/api', apiRouter);


app.listen(serverConfig.PORT, () => {
    console.log("Server started on Port: " + serverConfig.PORT);
    
    sampleWorker('sampleQueue');
    
    sampleProducer('sampleJob', {
        name: 'glitch',
        company: 'None',
        position: 'None',
        location: 'Remote'
    }, 2);

    sampleProducer('sampleJob', {
        name: 'Akshay',
        company: 'Micro',
        position: 'SDE3',
        location: 'Remote'
    },2);
});

