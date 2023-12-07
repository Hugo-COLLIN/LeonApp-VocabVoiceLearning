export class GameSet {
    constructor(jsonpath) {
      fetch(jsonpath)
          .then((response) => response.json())
          .then((data) => {
            this.path = data.path;
            this.imageList = data.imageList;
          });
    }
}