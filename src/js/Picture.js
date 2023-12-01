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
        // Create a new image element.
        const img = document.createElement('img');

        // Set the image's attributes.
        img.setAttribute('src', this.picturePath);
        img.setAttribute('alt', this.pictureName);
        img.setAttribute('title', this.pictureName);

        // Add the image to the page.
        document.querySelector(classDivName).appendChild(img);
    }
}

// const picture = new Picture('biche', 'ressources/biche.jpg');
// picture.addPicture('#pictures');