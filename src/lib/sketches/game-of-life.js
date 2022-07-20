import sketch from '$lib/sketch';

/**
 * Creates a 2D array.
 *
 * @param {*} cols
 * @param {*} rows
 * @returns
 */
const makeGrid = (cols, rows) => Array.from({ length: cols }, () => Array.from({ length: rows }));

export const makeSketch = sketch((p5) => ({
  fps: 30,
  grid: null,

  cols: 0,
  rows: 0,
  size: 40,

  padding: {
    x: 1,
    y: 8,
  },

  aliveCell: {
    mainArea: {
      leak: 7,
      color: [230, 154, 141, 130],
      colorVariation: {
        value: 25,
        channel: 1,
      },
    },

    paddingArea: {
      leak: 7,
      color: [223, 101, 137, 130],
      colorVariation: {
        value: 25,
        channel: 1,
      },
    },
  },

  deadCell: {
    mainArea: {
      leak: 7,
      color: [58, 45, 84, 10],
      colorVariation: {
        value: 45,
        channel: 1,
      },
    },

    paddingArea: {
      leak: 7,
      color: [35, 10, 48, 10],
      colorVariation: {
        value: 30,
        channel: 2,
      },
    },
  },

  setup() {
    p5.frameRate(this.fps);
    p5.background(this.deadCell.mainArea.color.slice(0, -1));

    this.cols = p5.ceil(p5.width / this.size);
    this.rows = p5.ceil(p5.height / this.size);
    this.grid = makeGrid(this.cols, this.rows);

    for (let x = 0; x < this.cols; x++) {
      for (let y = 0; y < this.rows; y++) {
        this.grid[x][y] = p5.floor(p5.random(2));
      }
    }

    // if (this.$recorder) {
    //   this.$recorder.setup({
    //     name: 'game-of-life',
    //     fps: this.fps,
    //     end: 60,
    //   });

    //   this.$recorder.start();
    // }
  },

  draw() {
    const nextGen = makeGrid(this.cols, this.rows);
    const aliveCells = [];

    p5.noStroke();

    for (let x = 0; x < this.cols; x++) {
      for (let y = 0; y < this.rows; y++) {
        const alive = this.grid[x][y];
        const neighbors = this.countNeighbors(x, y);

        alive ? aliveCells.push([x, y]) : this.drawDeadCell(x, y);

        if (!alive && neighbors === 3) {
          nextGen[x][y] = 1;
        } else if (alive && (neighbors < 2 || neighbors > 3)) {
          nextGen[x][y] = 0;
        } else {
          nextGen[x][y] = alive;
        }
      }
    }

    for (const [x, y] of aliveCells) {
      this.drawAliveCell(x, y);
    }

    this.grid = nextGen;
  },

  drawAliveCell(x, y) {
    const { leak, color, colorVariation } = this.isPadding(x, y)
      ? this.aliveCell.paddingArea
      : this.aliveCell.mainArea;

    p5.fill(this.nearColor(color, colorVariation.value, colorVariation.channel));
    p5.square(
      x * this.size + p5.floor(p5.random(leak)) * (p5.floor(p5.random(2)) ? -1 : 1),
      y * this.size + p5.floor(p5.random(leak)) * (p5.floor(p5.random(2)) ? -1 : 1),
      this.size
    );
  },

  drawDeadCell(x, y) {
    const { leak, color, colorVariation } = this.isPadding(x, y)
      ? this.deadCell.paddingArea
      : this.deadCell.mainArea;

    p5.fill(this.nearColor(color, colorVariation.value, colorVariation.channel));
    p5.square(
      x * this.size + p5.floor(p5.random(leak)) * (p5.floor(p5.random(2)) ? -1 : 1),
      y * this.size + p5.floor(p5.random(leak)) * (p5.floor(p5.random(2)) ? -1 : 1),
      this.size
    );
  },

  countNeighbors(x, y) {
    let sum = 0;
    for (let i = -1; i < 2; i++) {
      for (let j = -1; j < 2; j++) {
        const col = (x + i + this.cols) % this.cols;
        const row = (y + j + this.rows) % this.rows;

        sum += this.grid[col][row];
      }
    }

    sum -= this.grid[x][y];
    return sum;
  },

  isPadding(x, y) {
    return (
      x <= this.padding.x - 1 ||
      y <= this.padding.y - 1 ||
      this.cols - x <= this.padding.x ||
      this.rows - y <= this.padding.y
    );
  },

  nearColor(color, variation, channel) {
    const nearColor = [...color];
    nearColor[channel] = p5.floor(
      p5.random(p5.max(color[channel] + variation, 0), p5.min(color[channel] - variation, 255))
    );

    return nearColor;
  },
}));
