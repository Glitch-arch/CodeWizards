import { Job, Worker } from "bullmq";

import redisConnection from "../config/redis.config";
import sampleJob from "../jobs/sample.Job";

export default function sampleWorker(queueName: string) {
    new Worker(
        queueName, 
        async (job: Job) => {
            console.log("Sample job worker kicking");
            if(job.name === "sampleJob") {
                const sampleJobInstance = new sampleJob(job.data);

                sampleJobInstance.handle(job);

                return true;
            }
        },
        {
            connection: redisConnection
        }
    );
}