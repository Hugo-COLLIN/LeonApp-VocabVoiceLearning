import { Page } from './Page.js';
import { GridGame } from "../elements/gameGrid/GridGame.js";

export class PageGame extends Page {
  constructor(id, selector, gameSet) {
    const gridGame = new GridGame(id, selector, gameSet);
    super(id, gridGame);
    this.gameSet = gameSet;

    // Store the event listener function in an instance property
    this.onShow = () => {
      this.grid.startGame();
    };
    this.onClickPlayButton = () => {
      this.grid.saySelectedPictureName();
    };
  }

  init() {
    super.init();
    this.grid.fillCells(this.gameSet);
    const gameElement = document.querySelector(`#${this.id}`);
    gameElement.addEventListener('show', this.onShow);
    document.querySelector(`#${this.id} .play-button`).addEventListener('click', this.onClickPlayButton);
  }

  remove() {
    const gameElement = document.querySelector(`#${this.id}`);
    gameElement.removeEventListener('show', this.onShow);
    document.querySelector(`#${this.id} .play-button`).removeEventListener('click', this.onClickPlayButton);
  }
}