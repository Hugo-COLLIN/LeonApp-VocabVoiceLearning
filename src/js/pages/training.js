import {Picture} from "../elements/Picture.js";
import {Grid} from "../elements/Grid.js";

/**
 * Add training pictures to the page
 */
export function addTrainingPictures() {
  const picture = new Picture('biche', 'assets/grids/animals-1/biche.jpg');
  picture.addPicture('.cell:nth-of-type(1)>img');
  document.querySelector('.cell:nth-of-type(1)')
    .addEventListener('click', picture.sayPictureName.bind(picture));
}

export function appendGrid() {
  const grid = new Grid('grid', '#learn > .grid-container');
  grid.initCells(3);
  grid.setCellsImages('assets/grids/animals-1/', [
    {name: 'biche.jpg', alt: 'biche'},
    {name: 'chat.jpg', alt: 'chat'},
    {name: 'cochon.jpg', alt: 'cochon'},
    {name: 'giraffe.jpg', alt: 'girafe'},
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