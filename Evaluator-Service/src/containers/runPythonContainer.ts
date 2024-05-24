import { testCases } from "../types/testCases";
import { PYTHON_IMAGE } from "../utils/constants";
import createContainer from "./containerFactory";
import { decodeDockerStream } from "./dockerHelper";

async function runPython(code: string) {

    const rawbuffer: Buffer[] = [];

    const pythonContainer = await createContainer(PYTHON_IMAGE, ['python', 'c', code, 'stty -echo']);
    await pythonContainer.start();

    const loggerStream = await pythonContainer.logs({
        stdout: true,
        stderr: true,
        timestamps: false,
        follow: true
    });

    loggerStream.on("data", (chunk) => {
        rawbuffer.push(chunk);
    });
        await new Promise((res) => {
            loggerStream.on('end', () => {
                console.log(rawbuffer);
                const completeBuffer = Buffer.concat(rawbuffer);
                const decodedStream = decodeDockerStream(completeBuffer);
                console.log(completeBuffer);
                console.log(decodedStream.stdout);
                res(decodeDockerStream);
            });

            return rawbuffer;
        });
    }
export default runPython;