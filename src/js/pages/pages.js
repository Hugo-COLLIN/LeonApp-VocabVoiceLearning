import {appendGrid} from "./training.js";
import {initGameGrid} from "./game.js";
import {GameSet} from "../elements/GameSet.js";

const gameSet = new GameSet('assets/sets/animals-1/', [
  {name: 'biche.jpg', alt: 'biche'},
  {name: 'chat.jpg', alt: 'chat'},
  {name: 'cochon.jpg', alt: 'cochon'},
  {name: 'girafe.jpg', alt: 'girafe'},
  {name: 'lion.jpg', alt: 'lion'},
  {name: 'panda.jpg', alt: 'panda'},
  {name: 'chien.jpg', alt: 'chien'},
  {name: 'chimpanze.jpg', alt: 'chimpanzé'},
  {name: 'tortue.png', alt: 'tortue'},
]);

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

