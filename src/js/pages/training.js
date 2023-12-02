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
}