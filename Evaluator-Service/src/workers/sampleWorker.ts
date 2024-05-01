import { Job, Worker } from "bullmq";
import sampleJob from "../jobs/sample.Job";
import redisConnection from "../config/redis.config";

export const sampleWorker = (queueName: string) => {
    new Worker(
        queueName,
        async (job: Job) => {
            console.log("Sample job worker kicking", job);
            if (job.name === "sampleJob") {
                const sampleJobInstance = new sampleJob(job.data);
                sampleJobInstance.handle(job);
                return true;
            }
        },
        {
            connection: redisConnection
        }
    );
};