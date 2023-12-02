const { JSDOM } = require('jsdom');
const { Grid } = require('../../../src/js/elements/gameGrid/Grid');
const {NotImplementedError} = require("../../../src/js/application/errors/NotImplementedError");

describe('Grid', () => {
  test('constructor', () => {
    expect(() => {new Grid('testGrid', '#parent')}).toThrow(NotImplementedError);
  });
});
