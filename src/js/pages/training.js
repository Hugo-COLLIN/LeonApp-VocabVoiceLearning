import {GridLearning} from "../elements/gameGrid/GridLearning.js";
import {Grid} from "../elements/gameGrid/Grid.js";

export function appendGrid() { //appendgrid(Serie)
  const grid = new GridLearning('grid', '#learn > .grid-container');
  grid.initCells(3);
  // TODO: remplacer imageList par un objet Serie ?
  grid.fillCells('assets/grids/animals-1/', [
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