import {getPictures, Picture} from "./Picture.js";
import {SpeechSynthesis} from "./SpeechSynthesis.js";

export class GridGame {
    constructor() {
        this.pictureNames = getPictures().map(picture => picture.pictureName);
        this.selectedPictureName = this.getRandomPictureName();
        this.speechSynthesis = new SpeechSynthesis();
    }

    /**
     * Get a random picture name
     * @returns {Picture}
     */
    getRandomPictureName() {
        const pictureName = this.pictureNames[Math.floor(Math.random() * this.pictureNames.length)];
        this.pictureNames.splice(this.pictureNames.indexOf(pictureName), 1);
        return pictureName;
    }

    /**
     * Compares the picture name with the selected picture name
     * @param pictureName
     */
    comparePictureName(pictureName) {
        if (pictureName === this.selectedPictureName)
            this.speechSynthesis.speak('Bonne réponse');
        else
            this.speechSynthesis.speak('Mauvaise réponse');
    }
}