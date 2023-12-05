import { Page } from './Page.js';
import { GridGame } from "../elements/gameGrid/GridGame.js";

export class PageGame extends Page {
  constructor(id, selector, gameSet) {
    const gridGame = new GridGame(id, selector, gameSet);
    super(id, gridGame);
    this.gameSet = gameSet;
  }

  init() {
    super.init();
    this.grid.fillCells(this.gameSet);
    const gameElement = document.querySelector(`#${this.id}`);
    gameElement.addEventListener('show', () => {
      this.grid.startGame();
    });
    document.querySelector(`#${this.id} .play-button`).addEventListener('click', () => {
      this.grid.saySelectedPictureName();
    });
  }
}