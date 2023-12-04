import {GridGame} from "../elements/gameGrid/GridGame.js";
import {SpeechSynthesis} from "../elements/SpeechSynthesis.js";
import {getPictures} from "../elements/gameGrid/Picture.js";

/**
 * Add pictures to the game page
 */
export function addEvaluationPictures() {
    const gridGame = new GridGame();
    getPictures().forEach((picture, index) => {
        picture.addPicture(`#game .grid .cell:nth-of-type(${index + 1})>img`);
        document.querySelector(`#game .grid .cell:nth-of-type(${index + 1})`)
            .addEventListener('click', gridGame.comparePictureName.bind(gridGame, picture.pictureName));
    });
    document.querySelector('#play-button').addEventListener('click', () => {
        new SpeechSynthesis().speak(gridGame.selectedPictureName);
    });
}