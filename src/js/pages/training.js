import {getPictures} from "../classes/Picture.js";

/**
 * Add training pictures to the page
 */
export function addTrainingPictures() {
  getPictures().forEach((picture, index) => {
    picture.addPicture(`#learn .grid .cell:nth-of-type(${index + 1})>img`);
    document.querySelector(`#learn .grid .cell:nth-of-type(${index + 1})`)
      .addEventListener('click', picture.sayPictureName.bind(picture));
  });
}