import { withRecorder } from '$lib/sketch/recorder';

const withCore = ({ p5, config }) => ({
  $canvas: null,

  $setupListeners: [],
  $drawListeners: [],

  $setup() {
    const { canvasWidth, canvasHeight } = config;
    this.$canvas = p5.createCanvas(canvasWidth, canvasHeight);

    this.setup(config);
    this.$setupListeners.forEach((fn) => fn(config));
  },

  $draw() {
    this.draw(config);
    this.$drawListeners.forEach((fn) => fn(config));
  },

  $onSetup(fn) {
    this.$setupListeners.push(fn);
  },

  $onDraw(fn) {
    this.$drawListeners.push(fn);
  },
});

export default (makeSketch) =>
  ({ p5, config }) => {
    const sketch = {
      ...makeSketch(p5),
      ...withCore({ p5, config }),
    };

    return Object.assign(sketch, {
      ...withRecorder({ p5, sketch }),
    });
  };
