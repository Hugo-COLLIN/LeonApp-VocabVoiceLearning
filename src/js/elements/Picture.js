import {SpeechSynthesis} from "./SpeechSynthesis.js";

/**
 * A class representing a picture
 */
export class Picture {
    constructor(pictureName, picturePath) {
        this.pictureName = pictureName;
        this.picturePath = picturePath;

        this.img = document.createElement('img');
        this.img.src = this.picturePath;
        this.img.alt = this.pictureName;
    }

    /**
     * Say the picture name
     */
    sayPictureName() {
        new SpeechSynthesis().speak(this.pictureName);
    }

    getPicture() {
      return this.img;
    }
}

