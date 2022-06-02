import { dev } from '$app/env';
import { io } from 'socket.io-client';

const makeRecorder = ({ p5, sketch }) => ({
  config: {
    name: String(Date.now()),
    fps: 24,
    start: 0,
    end: 30,
    videoFormat: 'video/mp4',
    imageFormat: 'image/png',
    imageQuality: 1.0,
  },

  socket: null,
  progress: null,
  status: 'paused',

  setup(options) {
    this.config = { ...this.config, ...options };
  },

  start() {
    this.socket = io(import.meta.env.VITE_WEBSOCKET_URL);

    this.socket.on('progress', (progress) => {
      this.progress = progress;
    });

    this.socket.on('finished', (downloadUrl) => {
      this.status = 'finished';
      window.location.href = downloadUrl;
    });

    this.record();
  },

  isRecording() {
    return this.status === 'recording';
  },

  record() {
    this.status = 'recording';
    sketch.$onDraw(() => {
      const { fps, start, end } = this.config;
      const seconds = p5.frameCount / fps;

      if (seconds >= start && seconds <= end) {
        this.saveFrame();
      } else if (seconds > end && this.isRecording()) {
        this.render();
      }
    });
  },

  saveFrame() {
    const { name, imageFormat, imageQuality } = this.config;

    this.socket.emit('frame', {
      name,
      count: p5.frameCount,
      format: imageFormat,
      data: sketch.$canvas.elt.toDataURL(imageFormat, imageQuality),
    });
  },

  render() {
    const { name, fps, imageFormat, videoFormat } = this.config;

    this.status = 'rendering';
    this.socket.emit('render', {
      name,
      fps,
      imageFormat,
      videoFormat,
    });
  },
});

export const withRecorder = (deps) =>
  dev
    ? {
        $recorder: makeRecorder(deps),
      }
    : {};
