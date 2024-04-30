import { IJob } from "../types/bullMqJobDefinition";

class sampleJob implements IJob {
    constructor(payload : Record<string, unknown>) {
        this.name = this.constructor.name,
            this.payload = payload
    }
}