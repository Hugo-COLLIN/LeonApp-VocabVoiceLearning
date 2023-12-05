import {Grid} from "./Grid.js";
import {SpeechSynthesis} from "../SpeechSynthesis.js";
import {showAppPage} from "../../application/router/managePages.js";

const WIN_MESSAGE = 'Bravo, vous avez gagné !';

export class GridGame extends Grid {
  constructor(gridName, appendSelector, gameSet) {
    super(gridName, appendSelector);
    this.gameSet = gameSet;
    this.pictureNames = gameSet.imageList.map(image => image.alt);
    this.speechSynthesis = new SpeechSynthesis();
  }

  saySelectedPictureName() {
    this.speechSynthesis.speak(this.selectedPictureName);
  }

  fillCells(gameSet) {
    let i = 0;
    for (const cell of this.cells) {
      cell.initCellPicture(gameSet.path + gameSet.imageList[i].name, gameSet.imageList[i].alt ?? "");
      cell.getCell().addEventListener('click', this.comparePictureName.bind(this, gameSet.imageList[i].alt));
      i++;
    }
  }

  setCellsCursor(cursorType) {
    for (const cell of this.cells) {
      cell.getCell().style.cursor = cursorType;
    }
  }

  getRandomPictureName() {
    let pictureName = this.pictureNames[Math.floor(Math.random() * this.pictureNames.length)];
    if(this.pictureNames.length > 0) {
      this.pictureNames.splice(this.pictureNames.indexOf(pictureName), 1);
    }
    else {
      pictureName = WIN_MESSAGE;
      this.stopGame();
    }
    this.speechSynthesis.speak(pictureName);
    return pictureName;
  }


  comparePictureName(pictureName) {
    if (this.selectedPictureName === WIN_MESSAGE) {
      return;
    }

    if (pictureName === this.selectedPictureName) {
      this.speechSynthesis.speak('Bonne réponse');
      this.selectedPictureName = this.getRandomPictureName();
    }
    else {
      this.speechSynthesis.speak('Mauvaise réponse');
      this.speechSynthesis.speak(this.selectedPictureName);
    }
  }

  startGame() {
    this.setCellsCursor('pointer');
    this.pictureNames = this.gameSet.imageList.map(image => image.alt);
    this.selectedPictureName = this.getRandomPictureName();
  }

  stopGame() {
    this.setCellsCursor('auto');
    showAppPage("result")
  }
}
