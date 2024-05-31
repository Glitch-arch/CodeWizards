import sampleQueues from "../queues/sample.Queues";

export default async function(name:string, payload: Record<string,unknown>, priority:number) {
    await sampleQueues.add(name, payload, {priority});
} 

