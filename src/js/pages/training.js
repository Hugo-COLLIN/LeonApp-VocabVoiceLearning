import {GridLearning} from "../elements/gameGrid/GridLearning.js";

export function appendGrid(gameSet) {
  const grid = new GridLearning('grid', '#learn > .grid-container');
  grid.initCells(3);

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