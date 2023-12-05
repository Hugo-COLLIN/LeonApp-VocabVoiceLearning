import {GridGame} from "../elements/gameGrid/GridGame.js";

export function initGameGrid(gameSet) {
  const gridGame = new GridGame('gridGame', '#game > .grid-container', gameSet);
  gridGame.initCells(3);
  gridGame.fillCells(gameSet);

  return gridGame;
}

