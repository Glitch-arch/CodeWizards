import { createBullBoard } from "@bull-board/api";
import {BullMQAdapter} from "@bull-board/api/bullMQAdapter";
import { ExpressAdapter } from "@bull-board/express";

import sampleQueues from "../queues/sample.Queues";


const serverAdapter = new ExpressAdapter();
serverAdapter.setBasePath('/ui');

createBullBoard({
    queues: [new BullMQAdapter(sampleQueues)],
    serverAdapter,
});

export default serverAdapter;