import {jsonToGameSet} from "../elements/GameSet.js";
import { PageGame } from "./PageGame.js";
import { PageLearning } from "./PageLearning.js";

const animalsGameSet = jsonToGameSet('assets/data/animals-1-data.json');

const fruitsGameSet = jsonToGameSet('assets/data/fruits-1-data.json');

export function initPagesContent() {
  document.querySelectorAll('#set-selector').forEach((element) => {
    element.addEventListener('click', (event) => {
      switch (event.target.innerText.toLowerCase()) {
        case 'animaux':
          initGameSet(animalsGameSet);
          break;
        case 'fruits':
          initGameSet(fruitsGameSet);
          break;
        default:
          console.error('set not found');
      }
    });
  });

}

let trainingPage = null;
let gamePage = null;

export function initGameSet(gameSet) {
  // If trainingPage and gamePage exist, remove their grid elements from the DOM
  if (trainingPage) {
    trainingPage.grid.grid.remove();
    trainingPage = null;
  }
  if (gamePage) {
    gamePage.grid.grid.remove();
    gamePage.remove();
    gamePage = null;
  }

  // Create new instances of PageTraining and PageGame
  trainingPage = new PageLearning('learn', '#learn > .grid-container', gameSet);
  trainingPage.init();

  gamePage = new PageGame('game', '#game > .grid-container', gameSet);
  gamePage.init();
}


