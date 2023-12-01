/**
 * A class representing a picture
 */
class Picture {
    constructor(pictureName, picturePath) {
        this.pictureName = pictureName;
        this.picturePath = picturePath;
    }

    /**
     * Create a new image element and add it to the page
     * @param classDivName name of the html div or class
     */
    addPicture(classDivName) {
        document.querySelector(classDivName).setAttribute('src', this.pictureName);
        document.querySelector(classDivName).setAttribute('src', this.picturePath);
    }

    /**
     * Say the picture name
     */
    sayPictureName() {
        const speechSynthesis = new SpeechSynthesis();
        speechSynthesis.speak(this.pictureName);
    }

}

// const picture = new Picture('biche', 'ressources/biche.jpg');
// picture.addPicture('.cell:nth-of-type(1)>img');