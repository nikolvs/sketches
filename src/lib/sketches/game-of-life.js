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

  colors: {
    alive: [230, 154, 141, 70],
    dead: [95, 75, 139, 20],
  },

  chaos: {
    alive: 20,
    dead: 40,
  },

  setup() {
    p5.frameRate(this.fps);
    p5.background(this.colors.dead.slice(0, -1));

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
    //     end: 30,
    //   });

    //   this.$recorder.start();
    // }
  },

  draw() {
    const nextGen = makeGrid(this.cols, this.rows);

    p5.noStroke();

    for (let x = 0; x < this.cols; x++) {
      for (let y = 0; y < this.rows; y++) {
        const alive = this.grid[x][y];
        const neighbors = this.countNeighbors(x, y);

        alive ? this.drawAliveCell(x, y) : this.drawDeadCell(x, y);

        if (!alive && neighbors === 3) {
          nextGen[x][y] = 1;
        } else if (alive && (neighbors < 2 || neighbors > 3)) {
          nextGen[x][y] = 0;
        } else {
          nextGen[x][y] = alive;
        }

        this.colors.dead[0] = p5.floor(p5.random(55, 155));
      }
    }

    this.grid = nextGen;
  },

  drawAliveCell(x, y) {
    p5.fill(this.colors.alive);
    p5.square(
      x * this.size - p5.floor(p5.random(this.chaos.alive)),
      y * this.size - p5.floor(p5.random(this.chaos.alive)),
      this.size
    );
  },

  drawDeadCell(x, y) {
    const circleX = x * this.size + this.size / 2;
    const circleY = y * this.size + this.size / 2;

    p5.fill(this.colors.dead);
    p5.circle(
      circleX + p5.floor(p5.random(this.chaos.dead)) * (p5.random([0, 1]) ? -1 : 1),
      circleY + p5.floor(p5.random(this.chaos.dead)) * (p5.random([0, 1]) ? -1 : 1),
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
}));
