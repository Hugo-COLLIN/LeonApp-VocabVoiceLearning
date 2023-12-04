import {SpeechSynthesis} from "../SpeechSynthesis.js";

/**
 * A class representing a picture
 */
export class Picture {

  /**
   * Constructor
   * @param pictureName - The picture name
   * @param picturePath - The image path
   */
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

    /**
     * Get the picture
     * @returns {HTMLImageElement} - The picture HTML element
     */
    getPicture() {
      return this.img;
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

}

/**
 * Get all pictures
 * @returns {Picture[]}
 */
export function getPictures() {
  return [
    new Picture('biche', 'assets/grids/animals-1/biche.jpg'),
    new Picture('chat', 'assets/grids/animals-1/chat.jpg'),
    new Picture('chien', 'assets/grids/animals-1/chien.jpg'),
    new Picture('cochon', 'assets/grids/animals-1/cochon.jpg'),
    new Picture('girafe', 'assets/grids/animals-1/girafe.jpg'),
    new Picture('lion', 'assets/grids/animals-1/lion.jpg'),
    new Picture('panda', 'assets/grids/animals-1/panda.jpg'),
    new Picture('singe', 'assets/grids/animals-1/singe.jpg'),
    new Picture('tortue', 'assets/grids/animals-1/tortue.jpg'),
  ];
}