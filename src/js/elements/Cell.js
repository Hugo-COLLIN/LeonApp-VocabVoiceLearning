export class Cell {
  constructor() {
    this.cell = document.createElement('div');
    this.cell.classList.add('cell');

    const img = document.createElement('img');
    img.src = ""; // Vous pouvez définir une source d'image ici
    img.alt = "";

    const figcaption = document.createElement('figcaption');

    this.cell.appendChild(img);
    this.cell.appendChild(figcaption);

    this.picture = null;
  }

  getCell() {
    return this.cell;
  }

  setCellImage(src, alt = "") {
    this.cell.querySelector('img').src = src;
    this.cell.querySelector('img').alt = alt;
  }

  setCellCaption(text) {
    this.cell.querySelector('figcaption').textContent = text;
  }
}

