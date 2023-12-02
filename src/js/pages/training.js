import {getPictures, Picture} from "../classes/Picture.js";

/**
 * Add training pictures to the page
 */
export function addTrainingPictures() {
  // const picture = new Picture('biche', 'assets/grids/animals-1/biche.jpg');
  // picture.addPicture('.cell:nth-of-type(1)>img');
  // document.querySelector('.cell:nth-of-type(1)')
  //   .addEventListener('click', picture.sayPictureName.bind(picture));
  getPictures().forEach((picture, index) => {
    picture.addPicture(`.cell:nth-of-type(${index + 1})>img`);
    document.querySelector(`.cell:nth-of-type(${index + 1})`)
      .addEventListener('click', picture.sayPictureName.bind(picture));
  });
}