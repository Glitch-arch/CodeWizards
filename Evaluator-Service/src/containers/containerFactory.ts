import Dockerode from "dockerode";

async function createContainer(imageName: string, cmdExecutable: [string]) {
    
    const Docker = new Dockerode;

    const container = await Docker.createContainer({

        Image: imageName,
        Cmd: cmdExecutable,
        AttachStdin: true, // To enable input streams 
        AttachStdout: true, // To enable output streams
        AttachStderr: true, // To enable error streams
        Tty: false,
        OpenStdin: true // To keep the input stream open even when no interaction is there
    });

    return container;

}

export default createContainer;