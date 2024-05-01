import sampleQueues from "../queues/sample.Queues";

export default async function(name:string, payload: Record<string,unknown>) {
    await sampleQueues.add(name, payload);
} 