export class Page {
  constructor(id, grid) {
    this.id = id;
    this.grid = grid;
  }

  init() {
    this.grid.initCells(3);
  }
}