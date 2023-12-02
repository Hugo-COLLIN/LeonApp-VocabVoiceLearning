class Grid {
    constructor(gridName, appendSelector) {
        this.gridName = gridName;
        this.parentSelector = document.querySelector(appendSelector);

        this.grid = document.createElement('div');
        this.grid.setAttribute('id', this.gridName);
        this.grid.classList.add('grid');
        this.parentSelector.appendChild(this.grid);
    }

    /**
     * Add cells to the grid
     * @param size - The size of the grid (size x size)
     */
    setCells(size = 3) {
      for (let i = 0; i < size * size; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        this.grid.appendChild(cell);
      }

      // Set the grid size
      this.grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
      this.grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    }
}

module.exports = { Grid };