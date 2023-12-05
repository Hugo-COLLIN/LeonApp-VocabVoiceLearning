import {Grid} from "./Grid.js";
import {Speecher} from "../Speecher.js";

/**
 * A class representing a grid
 */
export class GridLearning extends Grid {
    constructor(gridName, appendSelector) {
        super(gridName, appendSelector);
        this.speechSynthesis = new Speecher();
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

    initialSpeak() {
      this.speechSynthesis.speak('Cliquez sur une image pour l\'entendre');
    }

}