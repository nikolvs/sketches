import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import { writeFile } from 'node:fs/promises';
import { Buffer } from 'node:buffer';

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  maxHttpBufferSize: 50e8 /** 50MB */,
  cors: {
    origin: '*',
  },
});

io.on('connection', (socket) => {
  socket.on('frame', async (frame) => {
    const [, data] = frame.data.split(',');
    await writeFile(
      `tmp/${frame.name}-${String(frame.count).padStart(7, '0')}.jpg`,
      Buffer.from(data, 'base64')
    );
  });
});

server.listen(8000);
