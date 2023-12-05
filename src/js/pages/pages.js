// import {appendGrid} from "./training.js";

import {getAnimalGameSet, getFruitGameSet} from "../elements/GameSet.js";
import {Game} from "./game.js";

let gameSet = getAnimalGameSet();
const game = new Game(gameSet);

export function initPagesContent() {
  // initTrainingPage();
  initGamePage();

  // Listen for hash changes
  document.querySelectorAll('a').forEach(function (link) {
    // Only listen for internal links
    if (link.host !== window.location.host || !link.hash.split("#")[1])
      return;

    // Listen for clicks on the links
    link.addEventListener('click', function (event) {
      game.updateGameSet(gameSet);
      switch (event.target.hash) {
        case '#animals':
          gameSet = getAnimalGameSet();
          break;
        case '#fruits':
          gameSet = getFruitGameSet();
          break;
      }
    });
  });
}

// function initTrainingPage() {
//   appendGrid(gameSet);
// }

function initGamePage() {
  document.querySelector('#game').addEventListener('show', () => {
    game.gridGame.startGame();
  });
  // document.querySelector('#game .play-button').addEventListener('click', () => {
  //   game.gridGame.saySelectedPictureName();
  // });
  game.gridGame.cells.forEach(cell => {
    cell.setCellOralMessage();
  });
}

