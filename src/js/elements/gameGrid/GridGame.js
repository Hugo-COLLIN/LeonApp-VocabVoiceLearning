import {Grid} from "./Grid.js";
import {Speecher} from "../Speecher.js";
import {showAppPage} from "../../application/router/managePages.js";

const WIN_MESSAGE = 'Bravo, vous avez gagné !';

export class GridGame extends Grid {
  constructor(gridName, appendSelector, gameSet) {
    super(gridName, appendSelector);
    this.gameSet = gameSet;
    this.pictureNames = gameSet.imageList.map(image => image.alt);
    this.speechSynthesis = new Speecher();

    this.score = 0;
    this.total = gameSet.imageList.length;
    this.firstCorrectAnswer = true;

    // Écouter l'événement personnalisé
    this.checkSpeaking = () => {
      this.setCellsCursor(window.speechSynthesis.speaking ? 'auto' : 'pointer');
    }

    window.addEventListener('speechStarted', this.checkSpeaking);
    window.addEventListener('speechEnded', this.checkSpeaking);
  }

  saySelectedPictureName() {
    this.speechSynthesis.speak(this.selectedPictureName);
  }


  fillCells(gameSet) {
    let i = 0;
    for (const cell of this.cells) {
      cell.initCellPicture(gameSet.path + gameSet.imageList[i].name, gameSet.imageList[i].alt ?? "");
      cell.getCell().addEventListener('click', this.comparePictureName.bind(this, gameSet.imageList[i].alt, cell.getCell()));
      i++;
    }
  }

  setCellsCursor(cursorType) {
    for (const cell of this.cells) {
      cell.getCell().style.cursor = cursorType;
    }
  }

  getRandomPictureName() {
    this.firstCorrectAnswer = true;
    let pictureName = this.pictureNames[Math.floor(Math.random() * this.pictureNames.length)];
    if(this.pictureNames.length > 0) {
      this.pictureNames.splice(this.pictureNames.indexOf(pictureName), 1);
    }
    else {
      pictureName = WIN_MESSAGE;
      setTimeout(() => this.stopGame(), 2000);
    }
    this.speechSynthesis.speak(pictureName);
    return pictureName;
  }


  comparePictureName(pictureName, cellElement) {
    if (window.speechSynthesis.speaking || this.selectedPictureName === WIN_MESSAGE) {
      return;
    }

    if (pictureName === this.selectedPictureName) {
      this.speechSynthesis.speak('Bonne réponse');
      cellElement.classList.add('cell-correct');
      setTimeout(() => cellElement.classList.remove('cell-correct'), 2000);
      if (this.firstCorrectAnswer) this.score++;
      this.selectedPictureName = this.getRandomPictureName();
    }
    else {
      this.firstCorrectAnswer = false;
      this.speechSynthesis.speak('Mauvaise réponse');
      cellElement.classList.add('cell-incorrect');
      setTimeout(() => cellElement.classList.remove('cell-incorrect'), 2000);
      this.speechSynthesis.speak(this.selectedPictureName);
    }
  }



  startGame() {
    this.setCellsCursor('pointer');
    this.score = 0;
    this.total = this.gameSet.imageList.length;
    this.pictureNames = this.gameSet.imageList.map(image => image.alt);
    this.initialSpeak();
    this.selectedPictureName = this.getRandomPictureName();
  }

  initialSpeak() {
    this.speechSynthesis.speak('Cliquez sur les images correspondantes');
  }

  stopGame() {
    this.setCellsCursor('auto');
    document.querySelector('.score').textContent = this.score;
    document.querySelector('.total').textContent = this.total;
    this.setCellsCursor('auto');
    showAppPage("result")
  }
}
