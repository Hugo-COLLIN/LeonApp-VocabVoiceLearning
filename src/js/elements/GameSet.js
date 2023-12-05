export class GameSet {
    constructor(path, imageList) {
        this.path = path;
        this.imageList = imageList;
    }
}

export function getAnimalGameSet() {
    return new GameSet('assets/sets/animals-1/', [
        {name: 'biche.jpg', alt: 'biche'},
        {name: 'chat.jpg', alt: 'chat'},
        {name: 'cochon.jpg', alt: 'cochon'},
        {name: 'girafe.jpg', alt: 'girafe'},
        {name: 'lion.jpg', alt: 'lion'},
        {name: 'panda.jpg', alt: 'panda'},
        {name: 'chien.jpg', alt: 'chien'},
        {name: 'chimpanze.jpg', alt: 'chimpanzé'},
        {name: 'tortue.png', alt: 'tortue'},
    ]);
}

export function getFruitGameSet() {
    return new GameSet('assets/sets/fruits-1/', [
        {name: 'ananas.jpg', alt: 'ananas'},
        {name: 'banane.jpg', alt: 'banane'},
        {name: 'figue.jpg', alt: 'figue'},
        {name: 'fraise.jpg', alt: 'fraise'},
        {name: 'kiwi.jpg', alt: 'kiwi'},
        {name: 'orange.jpg', alt: 'orange'},
        {name: 'poire.jpg', alt: 'poire'},
        {name: 'pomme.jpg', alt: 'pomme'},
        {name: 'raisin.jpg', alt: 'raisin'},
    ]);
}