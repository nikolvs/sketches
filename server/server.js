import express from 'express';
import http from 'http';
import mime from 'mime-types';
import { Server } from 'socket.io';
import { writeFile } from 'node:fs/promises';
import { Buffer } from 'node:buffer';
import path from 'path';
import ffmpeg from 'fluent-ffmpeg';

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  maxHttpBufferSize: 50e8 /** 50MB */,
  cors: {
    origin: '*',
  },
});

const framesDir = 'tmp';
const frameCountPadding = 4;

const framePath = (name, count, ext) =>
  path.resolve(framesDir, `${name}_${String(count).padStart(frameCountPadding, '0')}.${ext}`);

const framePathPattern = (name, ext) =>
  path.resolve(framesDir, `${name}_%0${frameCountPadding}d.${ext}`);

io.on('connection', (socket) => {
  socket.on('frame', async (frame) => {
    const [, data] = frame.data.split(';base64,');
    const ext = mime.extension(frame.format);

    await writeFile(framePath(frame.name, frame.count, ext), Buffer.from(data, 'base64'));
  });

  socket.on('render', (info) => {
    const imageExt = mime.extension(info.imageFormat);
    const videoExt = mime.extension(info.videoFormat);
    const filename = `${info.name}.${videoExt}`;

    ffmpeg(framePathPattern(info.name, imageExt))
      .size('1080x1920')
      .inputFPS(info.fps)
      .videoCodec('libx264')
      .videoBitrate(12000)
      .outputOptions(['-pix_fmt yuv420p'])
      .output(path.resolve(framesDir, filename))
      .on('progress', (progress) => {
        socket.emit('progress', progress);
      })
      .on('end', () => {
        socket.emit('finished', `http://localhost:8000/video/${filename}`);
      })
      .run();
  });
});

app.get('/video/:filename', (req, res) => {
  res.download(path.resolve(framesDir, req.params.filename));
});

server.listen(8000);
