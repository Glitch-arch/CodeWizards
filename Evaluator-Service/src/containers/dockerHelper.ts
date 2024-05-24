// Objective ->
// > To sort the raw buffer

import { DockerStreamOutput } from "../types/dockerStreamOutput";
import { DOCKER_STREAM_HEADER_SIZE } from "../utils/constants";

export function decodeDockerStream(buffer: Buffer): DockerStreamOutput  {
    
    let offset = 0;

    const decodedStream: DockerStreamOutput = { stdout: "", stderr: "" };

    while (offset < buffer.length) {
        
        const channel = buffer[offset];
        const length = buffer.readUint32BE(offset + 4);
        offset += DOCKER_STREAM_HEADER_SIZE;

        if (channel === 1) {
            decodedStream.stdout += buffer.toString('utf-8', offset, offset + length);
        }
        if (channel === 2) {
            decodedStream.stderr += buffer.toString('utf-8', offset, offset + length);
        }
        offset += length;
    }

    return decodedStream;
}