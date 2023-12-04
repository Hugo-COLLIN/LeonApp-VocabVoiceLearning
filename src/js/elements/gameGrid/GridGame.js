import {Grid} from "./Grid.js";
import {Cell} from './Cell.js';
import {getPictures} from "./Picture.js";
import {SpeechSynthesis} from "../SpeechSynthesis.js";

export class GridGame extends Grid {
  constructor(gridName, appendSelector) {
    super(gridName, appendSelector);
    this.pictureNames = getPictures().map(picture => picture.pictureName);
    this.speechSynthesis = new SpeechSynthesis();
    this.selectedPictureName = this.getRandomPictureName();
  }

  initCells(size = 3) {
    for (let i = 0; i < size * size; i++) {
      const cell = new Cell();
      this.grid.appendChild(cell.getCell());
      this.cells.add(cell);
    }

    // Set the grid size
    this.grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    this.grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  }

  fillCells(gameSet) {
    let i = 0;
    for (const cell of this.cells) {
      cell.initCellPicture(gameSet.path + gameSet.imageList[i].name, gameSet.imageList[i].alt ?? "");
      cell.getCell().addEventListener('click', this.comparePictureName.bind(this, gameSet.imageList[i].alt));
      i++;
    }
  }


  getRandomPictureName() {
    let pictureName = this.pictureNames[Math.floor(Math.random() * this.pictureNames.length)];
    if(this.pictureNames.length > 0) {
      this.pictureNames.splice(this.pictureNames.indexOf(pictureName), 1);
    }
    else
      pictureName = 'Bravo, vous avez gagné !'
    this.speechSynthesis.speak(pictureName);
    return pictureName;
  }

  comparePictureName(pictureName) {
    if (pictureName === this.selectedPictureName) {
      this.speechSynthesis.speak('Bonne réponse');
      this.selectedPictureName = this.getRandomPictureName();
    }
    else {
      this.speechSynthesis.speak('Mauvaise réponse');
      this.speechSynthesis.speak(this.selectedPictureName);
    }
  }
}
