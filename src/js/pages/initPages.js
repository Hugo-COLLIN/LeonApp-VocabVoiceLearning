import { GameSet } from "../elements/GameSet.js";
import { PageGame } from "./PageGame.js";
import { PageLearning } from "./PageLearning.js";

const animalsGameSet = new GameSet('assets/sets/animals-1/', [
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

const fruitsGameSet = new GameSet('assets/sets/fruits-1/', [
  {name: 'ananas.jpg', alt: 'ananas'},
  {name: 'banane.jpg', alt: 'banane'},
  {name: 'figue.jpg', alt: 'figue'},
  {name: 'fraise.jpg', alt: 'fraise'},
  {name: 'kiwi.jpg', alt: 'kiwi'},
  {name: 'orange.jpg', alt: 'orange'},
  {name: 'poire.jpg', alt: 'poire'},
  {name: 'pomme.jpg', alt: 'pomme'},
  {name: 'raisin.jpg', alt: 'raisin'},
]);

export function initPagesContent() {
  document.querySelectorAll('#set-selector').forEach((element) => {
    element.addEventListener('click', (event) => {
      console.log(event.target.innerText);
      switch (event.target.innerText.toLowerCase()) {
        case 'animaux':
          initGameSet(animalsGameSet);
          break;
        case 'fruits':
          initGameSet(fruitsGameSet);
          break;
        default:
          console.log('set not found');
      }
    });
  });

}

export function initGameSet(gameSet) {
  const trainingPage = new PageLearning('learn', '#learn > .grid-container', gameSet);
  trainingPage.init();

  const gamePage = new PageGame('game', '#game > .grid-container', gameSet);
  gamePage.init();
}

