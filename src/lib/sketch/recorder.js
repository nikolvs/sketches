import { dev } from '$app/env';
import { io } from 'socket.io-client';

const makeRecorder = ({ p5, sketch }) => ({
  socket: null,
  config: {
    name: String(Date.now()),
    fps: 24,
    start: 0,
    end: 60,
    videoFormat: 'video/webm',
    imageFormat: 'image/jpeg',
  },

  setup(options) {
    this.config = { ...this.config, ...options };
  },

  start() {
    this.socket = io(import.meta.env.VITE_WEBSOCKET_URL);
    this.record();
  },

  record() {
    sketch.$onDraw(() => {
      const { fps, start, end } = this.config;
      const seconds = p5.frameCount / fps;

      if (seconds >= start && seconds <= end) {
        this.saveFrame();
      }
    });
  },

  saveFrame() {
    const { name, imageFormat } = this.config;

    this.socket.emit('frame', {
      name,
      count: p5.frameCount,
      data: sketch.$canvas.elt.toDataURL(imageFormat),
    });
  },
});

export const withRecorder = (deps) =>
  dev
    ? {
        $recorder: makeRecorder(deps),
      }
    : {};
