import { Cell } from './Cell.js';
export class Grid {
    constructor(gridName, appendSelector) {
        this.gridName = gridName;
        this.parentSelector = document.querySelector(appendSelector);

        this.grid = document.createElement('div');
        this.grid.setAttribute('id', this.gridName);
        this.grid.classList.add('grid');
        this.parentSelector.appendChild(this.grid);

        this.cells = new Set();
    }

    /**
     * Add cells to the grid
     * @param size - The size of the grid (size x size)
     */
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

    setCellsImages(path, imageList) {
      let i = 0;
      for (const cell of this.cells) {
        cell.setCellImage(path + imageList[i].name, imageList[i].name);
        i++;
      }
      // functional
      // console.log(imageList)
      // this.cells.forEach((cell, index) => {
      //   console.log(imageList[index])
      //   cell.setCellImage(path + imageList[index].name, imageList[index].name);
      // });
    }
}