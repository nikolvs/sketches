/**
 * Creates a 2D array.
 *
 * @param {*} cols
 * @param {*} rows
 * @returns
 */
const makeGrid = (cols, rows) => Array.from({ length: cols }, () => Array.from({ length: rows }));

export const makeSketch = (p5) => ({
  grid: null,

  cols: 0,
  rows: 0,
  resolution: 40,

  colors: {
    alive: [240, 70],
    dead: [217, 67, 77, 10],
  },

  chaos: {
    alive: 10,
    dead: 40,
  },

  setup({ canvasWidth, canvasHeight }) {
    p5.createCanvas(canvasWidth, canvasHeight);
    p5.background(240);

    this.cols = p5.ceil(p5.width / this.resolution);
    this.rows = p5.ceil(p5.height / this.resolution);
    this.grid = makeGrid(this.cols, this.rows);

    for (let x = 0; x < this.cols; x++) {
      for (let y = 0; y < this.rows; y++) {
        this.grid[x][y] = p5.floor(p5.random(2));
      }
    }
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

        this.colors.dead[0] = p5.floor(p5.random(135, 255));
      }
    }

    this.grid = nextGen;
  },

  drawAliveCell(x, y) {
    p5.fill(this.colors.alive);
    p5.square(
      x * this.resolution - p5.floor(p5.random(this.chaos.alive)),
      y * this.resolution - p5.floor(p5.random(this.chaos.alive)),
      this.resolution
    );
  },

  drawDeadCell(x, y) {
    const circleX = x * this.resolution + this.resolution / 2;
    const circleY = y * this.resolution + this.resolution / 2;

    p5.fill(this.colors.dead);
    p5.circle(
      circleX + p5.floor(p5.random(this.chaos.dead)) * (p5.random([0, 1]) ? -1 : 1),
      circleY + p5.floor(p5.random(this.chaos.dead)) * (p5.random([0, 1]) ? -1 : 1),
      this.resolution
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
});
