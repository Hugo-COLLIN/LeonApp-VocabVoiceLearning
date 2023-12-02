import {getPictures} from "../classes/Picture.js";
import {GridGame} from "../classes/GridGame.js";
import {SpeechSynthesis} from "../classes/SpeechSynthesis.js";

/**
 * Add game pictures to the page
 */
export function addEvaluationPictures() {
    const gridGame = new GridGame();
    getPictures().forEach((picture, index) => {
        picture.addPicture(`#play .grid .cell:nth-of-type(${index + 1})>img`);
        document.querySelector(`#play .grid .cell:nth-of-type(${index + 1})`)
            .addEventListener('click', gridGame.comparePictureName.bind(gridGame, picture.pictureName));
    });
    new SpeechSynthesis().speak(gridGame.selectedPictureName);
    document.querySelector('#play-button').addEventListener('click', () => {
        new SpeechSynthesis().speak(gridGame.selectedPictureName);
    });
}