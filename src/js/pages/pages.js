import {appendGrid} from "./training.js";
import {initGameGrid} from "./game.js";
import {getAnimalGameSet, getFruitGameSet} from "../elements/GameSet.js";

let gameSet = getAnimalGameSet();
if (window.location.hash === '#fruits') {
  gameSet = getFruitGameSet();
}

export function initPagesContent() {
  initTrainingPage();
  initGamePage();
}

function initTrainingPage() {
  appendGrid(gameSet);
}

function initGamePage() {
  const gridGame = initGameGrid(gameSet);
  document.querySelector('#game').addEventListener('show', () => {
    gridGame.startGame();
  });
  document.querySelector('#game .play-button').addEventListener('click', () => {
    gridGame.saySelectedPictureName();
  });
}

