// Document: https://www.npmjs.com/package/ws

import { WebSocketServer } from 'ws'

const port = 2105;
const wss = new WebSocketServer({port: port});

wss.on('connection', (ws) => {
    ws.on("message", (message : string) => {
        console.log(message)
    })
})

console.log(`Listening on port ${port}...`);