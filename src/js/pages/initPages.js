import { GameSet } from "../elements/GameSet.js";
import { PageGame } from "./PageGame.js";
import { PageLearning } from "./PageLearning.js";

const gameSet = new GameSet('assets/sets/animals-1/', [
  {name: 'biche.jpg', alt: 'biche'},
  {name: 'chat.jpg', alt: 'chat'},
  {name: 'cochon.jpg', alt: 'cochon'},
  {name: 'girafe.jpg', alt: 'girafe'},
  {name: 'lion.jpg', alt: 'lion'},
  {name: 'panda.jpg', alt: 'panda'},
  {name: 'chien.jpg', alt: 'chien'},
  {name: 'chimpanze.jpg', alt: 'chimpanzé'},
  {name: 'tortue.png', alt: 'tortue'},
]);

export function initPagesContent() {
  const trainingPage = new PageLearning('learn', '#learn > .grid-container', gameSet);
  trainingPage.init();

  const gamePage = new PageGame('game', '#game > .grid-container', gameSet);
  gamePage.init();
}
