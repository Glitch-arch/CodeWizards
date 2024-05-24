import submissionQueues from "../queues/submission.queues";



export default async function(payload: Record<string, unknown>) {
    await submissionQueues.add("SubmissionJob", payload);
    console.log("Successfully added a new submission job");
}