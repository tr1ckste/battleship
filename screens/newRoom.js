'use strict';

const { Screen } = require('../library/screen.js');
const createButton = require('../library/createButton.js');
const screen = new Screen();

createButton(screen, 0, 0, 100, 30,
  'Back', 'screens/initial.js');

module.exports = screen;
