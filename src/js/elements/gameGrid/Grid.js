import {NotImplementedError} from "../../application/errors/NotImplementedError.js";
import {Cell} from "./Cell.js";

/**
 * An abstract class representing a grid
 */
export class Grid {
    constructor(gridName, appendSelector) {
        if (this.constructor === Grid)
          throw new NotImplementedError();

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

    fillCells(gameSet) {
      throw new NotImplementedError();
    }
}