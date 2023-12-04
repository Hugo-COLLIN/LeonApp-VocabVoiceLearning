import {GridLearning} from "../elements/gameGrid/GridLearning.js";
import {GameSet} from "../elements/GameSet.js";

export function appendGrid() {
  const grid = new GridLearning('grid', '#learn > .grid-container');
  grid.initCells(3);

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

  grid.fillCells(gameSet);
}


//[
//     {name: 'biche.jpg'},
//     {name: 'bison.jpg'},
//     {name: 'blaireau.jpg'},
//     {name: 'bouquetin.jpg'},
//     {name: 'cerf.jpg'},
//     {name: 'chevreuil.jpg'},
//     {name: 'chien.jpg'},
//     {name: 'chimpanze.jpg'},
//     {name: 'chouette.jpg'},
//   ]