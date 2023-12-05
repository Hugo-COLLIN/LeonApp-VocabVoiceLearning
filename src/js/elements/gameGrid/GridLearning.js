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
     * @param gameSet
     */
    fillCells(gameSet) {
      let i = 0;
      for (const cell of this.cells) {
        cell.initCellPicture(gameSet.path + gameSet.imageList[i].name, gameSet.imageList[i].alt ?? "");
        cell.setCellOralMessage(gameSet.imageList[i].alt ?? "");
        cell.setCellCaption(gameSet.imageList[i].alt ?? "")
        i++;
      }
    }

    updateCells(gameSet) {
        super.updateCells(gameSet);
        let i = 0;
        for (const cell of this.cells) {
            cell.setCellCaption(gameSet.imageList[i].alt ?? "")
            i++;
        }

    }
}