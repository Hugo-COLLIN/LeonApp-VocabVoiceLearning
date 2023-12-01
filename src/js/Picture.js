/**
 * A class representing a picture
 */
class Picture {
    constructor(pictureName, picturePath) {
        this.pictureName = pictureName;
        this.picturePath = picturePath;
    }

    /**
     * Create a new image element and add it to the page.
     */
    addPicture() {
        // Create a new image element.
        const img = document.createElement('img');

        // Set the image's attributes.
        img.setAttribute('src', this.picturePath);
        img.setAttribute('alt', this.pictureName);
        img.setAttribute('title', this.pictureName);

        // Add the image to the page.
        document.querySelector('#pictures').appendChild(img);
    }
}