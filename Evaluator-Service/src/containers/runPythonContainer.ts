// import { testCases } from "../types/testCases";
import { PYTHON_IMAGE } from "../utils/constants";
import createContainer from "./containerFactory";
import { decodeDockerStream } from "./dockerHelper";
import pullImage from "./pullImage";

async function runPython(code: string, inputTestCases: string) {

    const rawbuffer: Buffer[] = [];

    await pullImage(PYTHON_IMAGE);

    const runCommand = `echo '${code.replace(/'/g, `'\\"`)}' > test.py && echo '${inputTestCases.replace(/'/g, `'\\"`)}' | python3 test.py`;
    console.log(runCommand);
    const pythonContainer = await createContainer(PYTHON_IMAGE, [
        '/bin/sh', 
        '-c',
        runCommand
    ]); 
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