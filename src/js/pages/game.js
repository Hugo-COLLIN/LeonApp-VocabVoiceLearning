import {GridGame} from "../elements/gameGrid/GridGame.js";
import {GameSet} from "../elements/GameSet.js";

export function initGameGrid() {
  const gridGame = new GridGame('gridGame', '#game > .grid-container');
  gridGame.initCells(3);

  const gameSet = new GameSet('assets/grids/animals-1/', [
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

  gridGame.fillCells(gameSet);
}
