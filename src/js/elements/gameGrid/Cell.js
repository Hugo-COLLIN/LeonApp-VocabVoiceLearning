import {Picture} from "./Picture.js";

/**
 * A class representing a cell in a grid
 */
export class Cell {
  constructor() {
    this.cell = document.createElement('div');
    this.cell.classList.add('cell');
    this.cell.style.cursor = 'pointer';

    const figcaption = document.createElement('figcaption');
    this.cell.appendChild(figcaption);

    this.picture = null;
  }

  getCell() {
    return this.cell;
  }

  initCellPicture(src, alt = "") {
      this.picture = new Picture(alt, src);
      this.cell.appendChild(this.picture.getPicture());
  }

  setCellCaption(text) {
    this.cell.querySelector('figcaption').textContent = text;
  }

  setCellOralMessage() {
    this.cell.addEventListener('click', this.picture.sayPictureName.bind(this.picture));
  }
}

