const { JSDOM } = require('jsdom');
const { GridLearning } = require('../../../src/js/elements/gameGrid/GridLearning.js');

describe('GridLearning', () => {
  test('constructor', () => {
    const dom = new JSDOM(`<!DOCTYPE html><div id="parent"></div>`);
    global.document = dom.window.document;

    const grid = new GridLearning('testGrid', '#parent');
    expect(grid.gridName).toBe('testGrid');
    expect(grid.parentSelector).toBe(document.querySelector('#parent'));
    expect(grid.grid).toBe(document.querySelector('#testGrid'));
  });

  test('setCells', () => {
    const dom = new JSDOM(`<!DOCTYPE html><div id="parent"></div>`);
    global.document = dom.window.document;

    const grid = new GridLearning('testGrid', '#parent');
    grid.initCells(3);

    const cells = document.querySelectorAll('.cell');
    expect(cells.length).toBe(9);
  });
});
