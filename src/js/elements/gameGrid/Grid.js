import {NotImplementedError} from "../../application/errors/NotImplementedError.js";

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
      throw new NotImplementedError();
    }

    fillCells(gameSet) {
      throw new NotImplementedError();
    }
}