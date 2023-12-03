import {getPictures} from "./Picture.js";
import {SpeechSynthesis} from "./SpeechSynthesis.js";

export class GridGame {
    constructor() {
        this.pictureNames = getPictures().map(picture => picture.pictureName);
        this.speechSynthesis = new SpeechSynthesis();
        this.selectedPictureName = this.getRandomPictureName();
    }

    /**
     * Get a random picture name
     */
    getRandomPictureName() {
        let pictureName = this.pictureNames[Math.floor(Math.random() * this.pictureNames.length)];
        if(this.pictureNames.length > 0) {
            this.pictureNames.splice(this.pictureNames.indexOf(pictureName), 1);
        }
        else
            pictureName = 'Bravo, vous avez gagné !'
        this.speechSynthesis.speak(pictureName);
        return pictureName;
    }

    /**
     * Compares the picture name with the selected picture name
     * @param pictureName
     */
    comparePictureName(pictureName) {
        if (pictureName === this.selectedPictureName) {
            this.speechSynthesis.speak('Bonne réponse');
            this.selectedPictureName = this.getRandomPictureName();
        }
        else {
            this.speechSynthesis.speak('Mauvaise réponse');
            this.speechSynthesis.speak(this.selectedPictureName);
        }
    }
}