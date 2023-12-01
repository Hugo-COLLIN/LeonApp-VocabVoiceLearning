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

/**
 * Add training pictures to the page
 */
export function addTrainingPictures() {
    const picture = new Picture('biche', 'ressources/biche.jpg');
    picture.addPicture('.cell:nth-of-type(1)>img');
    document.querySelector('.cell:nth-of-type(1)')
        .addEventListener('click',picture.sayPictureName.bind(picture));
}