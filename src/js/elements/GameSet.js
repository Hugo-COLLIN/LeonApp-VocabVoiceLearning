export class GameSet {
    constructor(path, imageList) {
        this.path = path;
        this.imageList = imageList;
    }
}

/**
 * return a GameSet object from a json file
 * @param jsonpath
 */
export function jsonToGameSet(jsonpath) {
    const gameSet = new GameSet();
    fetch(jsonpath)
        .then((response) => response.json())
        .then((data) => {
            gameSet.path = data.path;
            gameSet.imageList = data.imageList;
        });
    return gameSet;
}