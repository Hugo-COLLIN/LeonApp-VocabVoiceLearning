import { Page } from './Page.js';
import { GridLearning } from "../elements/gameGrid/GridLearning.js";

export class PageLearning extends Page {
  constructor(id, selector, gameSet) {
    const grid = new GridLearning(id, selector, gameSet);
    super(id, grid);
    this.gameSet = gameSet;

    this.onShow = () => {
      this.grid.initialSpeak();
    };
  }

  init() {
    super.init();
    this.grid.fillCells(this.gameSet);
    const gameElement = document.querySelector(`#${this.id}`);
    this.onShow();
  }
}