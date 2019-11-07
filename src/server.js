'use strict';

const net = require('net');

const port = process.env.PORT || 3001;
const server = net.createServer();

server.listen(port, () => console.log(`Server up on ${port}`) );

let allowedEvents = ['save','error'];
let socketPool = {};
let lifetime_connections = 0;

function connections() {
  return Object.values(socketPool).length;
}

server.on('connection', (socket) => {
  const id = `Socket-` + lifetime_connections;
  lifetime_connections++;
  socketPool[id] = socket;
  console.log('Got new connection! New count: ', connections());
  socket.on('data', (buffer) => dispatchEvent(buffer));
  socket.on('close', () => {
    delete socketPool[id];
    console.log('Lose one connection! New count: ', connections());
  });
});

let dispatchEvent = (buffer) => {
  let text = buffer.toString().trim();
  console.log('received text', text);
  const eventPayload = JSON.parse(text);

  // Push to the pool that matches the event name
  if ( allowedEvents.includes(eventPayload.event) ) {
    console.log('broadcasting event to ', connections(), ' clients');
    for (let socketId in socketPool) {
      socketPool[socketId].write(JSON.stringify(eventPayload));
    }
  }
  else {
    console.log(`IGNORE ${event}`);
  }
};

