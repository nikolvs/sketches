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
  grid: null,
  nextGrid: null,

  setup() {
    p5.frameRate(24);
    p5.pixelDensity(1);

    this.grid = makeGrid(p5.width, p5.height);
    this.nextGrid = makeGrid(p5.width, p5.height);

    for (let x = 0; x < p5.width; x++) {
      for (let y = 0; y < p5.height; y++) {
        this.grid[x][y] = {
          a: 1,
          b: 0,
        };

        this.nextGrid[x][y] = {
          a: 1,
          b: 0,
        };
      }
    }

    for (let i = 200; i < 210; i++) {
      for (let j = 200; j < 210; j++) {
        this.grid[i][j].b = 1;
      }
    }
  },

  draw() {
    p5.loadPixels();

    const dA = 1;
    const dB = 0.5;
    const feed = 0.055;
    const k = 0.062;

    for (let x = 0; x < p5.width; x++) {
      for (let y = 0; y < p5.height; y++) {
        const { a, b } = this.grid[x][y];
        this.nextGrid[x][y] = {
          a: a + dA * this.laplace(x, y, 'a') - a * b * b + feed * (1 - a),
          b: b + dB * this.laplace(x, y, 'b') + a * b * b - (k + feed) * b,
        };

        this.nextGrid[x][y].a = p5.constrain(this.nextGrid[x][y].a, 0, 1);
        this.nextGrid[x][y].b = p5.constrain(this.nextGrid[x][y].b, 0, 1);

        const { a: nextA, b: nextB } = this.nextGrid[x][y];
        const color = p5.constrain(p5.floor((nextA - nextB) * 255), 0, 255);
        const pixel = (x + y * p5.width) * 4;

        p5.pixels[pixel + 0] = color;
        p5.pixels[pixel + 1] = color;
        p5.pixels[pixel + 2] = color;
        p5.pixels[pixel + 3] = 255;
      }
    }

    p5.updatePixels();

    const temp = this.grid;
    this.grid = this.nextGrid;
    this.nextGrid = temp;
  },

  laplace(x, y, key) {
    let sum = 0;
    for (let i = -1; i < 2; i++) {
      for (let j = -1; j < 2; j++) {
        const col = (x + i + p5.width) % p5.width;
        const row = (y + j + p5.height) % p5.height;
        const v = i === 0 && j === 0 ? -1 : (i === -1 || i === 1) && j !== 0 ? 0.05 : 0.2;

        sum += this.grid[col][row][key] * v;
      }
    }

    return sum;
  },
}));
