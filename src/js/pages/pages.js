import {appendGrid} from "./training.js";
import {initGameGrid} from "./game.js";

export function initPagesContent() {
  initTrainingPage();
  initGamePage();
}

function initTrainingPage() {
  appendGrid();
}

function initGamePage() {
  initGameGrid();
}
