import {addTrainingPictures, appendGrid} from "./training.js";

export function initPagesContent() {
  initTrainingPage();
}

function initTrainingPage() {
  appendGrid();
  addTrainingPictures();
}
