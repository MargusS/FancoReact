const WebSocket = require('ws');

const PORT = process.env.PORT || 8080;
const server = new WebSocket.Server({ port: PORT }, () => {
    console.log(`Server started on port ${PORT}`);
});

const clients = new Map();

function sendMessage(message) {
    usersToSend.forEach((user) => {
        user.ws.send(JSON.stringify(message));
    });
}

server.on('connection', (ws) => {
    const id = uuidv4();
    const color = Math.floor(Math.random() * 360);
    const metadata = { id, color };

    clients.set(ws, metadata);

    ws.on('message', (message) => {
        const messageJSON = JSON.parse(message);
        messageJSON.id = uuidv4();
        const messageRes = JSON.stringify(messageJSON);
        [...clients.keys()].forEach((client) => {
            client.send(messageRes);
        });

    });

    ws.on('close', () => {
        console.log("User disconnected")
        clients.delete(ws);
    });
});

function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}