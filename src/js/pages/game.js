import {GridGame} from "../elements/gameGrid/GridGame.js";
import {GridLearning} from "../elements/gameGrid/GridLearning.js";

export class Game {
    constructor(gameSet) {
        this.gameSet = gameSet;
        this.gridGame = new GridGame('gridGame', '#game > .grid-container', gameSet);
        this.gridGame.initCells(3);
        this.gridGame.fillCells(this.gameSet);
        this.grid = new GridLearning('grid', '#learn > .grid-container');
        this.grid.initCells(3);
        this.grid.fillCells(gameSet);
    }

    updateGameSet(gameSet) {
        this.gameSet = gameSet;
        this.gridGame.updateCells(this.gameSet);
        this.grid.updateCells(this.gameSet)
    }
}