import { Page } from './Page.js';
import { GridLearning } from "../elements/gameGrid/GridLearning.js";

export class PageTraining extends Page {
  constructor(id, selector, gameSet) {
    const grid = new GridLearning(id, selector, gameSet);
    super(id, grid);
    this.gameSet = gameSet;
  }

  init() {
    super.init();
    this.grid.fillCells(this.gameSet);
  }
}