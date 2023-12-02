import { Cell } from './Cell.js';
import {Grid} from "./Grid.js";

/**
 * A class representing a grid
 */
export class GridLearning extends Grid {
    constructor(gridName, appendSelector) {
        super(gridName, appendSelector);
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

    /**
     * Add cells to the grid
     * @param path
     * @param imageList
     */
    fillCells(path, imageList) {
      let i = 0;
      for (const cell of this.cells) {
        cell.initCellPicture(path + imageList[i].name, imageList[i].alt ?? "");
        cell.setCellCaption(imageList[i].alt ?? "")
        i++;
      }
    }
}