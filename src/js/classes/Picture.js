import {SpeechSynthesis} from "./SpeechSynthesis.js";

/**
 * A class representing a picture
 */
export class Picture {
    constructor(pictureName, picturePath) {
        this.pictureName = pictureName;
        this.picturePath = picturePath;
    }

    /**
     * Create a new image element and add it to the page
     * @param classDivName name of the html div or class
     */
    addPicture(classDivName) {
        const classDiv = document.querySelector(classDivName);
        classDiv.setAttribute('alt', this.pictureName);
        classDiv.setAttribute('src', this.picturePath);
    }

    /**
     * Say the picture name
     */
    sayPictureName() {
        new SpeechSynthesis().speak(this.pictureName);
    }
}

