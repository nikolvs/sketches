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
  resolution: 20,

  setup({ canvasWidth, canvasHeight }) {
    p5.createCanvas(canvasWidth, canvasHeight);
    p5.background(255);

    this.cols = p5.width / this.resolution;
    this.rows = p5.height / this.resolution;
    this.grid = makeGrid(this.cols, this.rows);

    for (let x = 0; x < this.cols; x++) {
      for (let y = 0; y < this.rows; y++) {
        this.grid[x][y] = p5.floor(p5.random(2));
      }
    }
  },

  draw() {
    const nextGen = makeGrid(this.cols, this.rows);

    for (let x = 0; x < this.cols; x++) {
      for (let y = 0; y < this.rows; y++) {
        p5.stroke(217, 67, 77);
        p5.fill(this.grid[x][y] ? [255, 50] : [217, 67, 77, 50]);
        p5.square(x * this.resolution, y * this.resolution, this.resolution);

        const neighbors = this.countNeighbors(x, y);
        const alive = this.grid[x][y] === 1;

        if (!alive && neighbors === 3) {
          nextGen[x][y] = 1;
        } else if (alive && (neighbors < 2 || neighbors > 3)) {
          nextGen[x][y] = 0;
        } else {
          nextGen[x][y] = this.grid[x][y];
        }
      }
    }

    this.grid = nextGen;
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
