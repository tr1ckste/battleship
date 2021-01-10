'use strict';
const { Screen, width } = require('../library/screen.js');
const createButton = require('../library/createButton.js');

const loggedIn = new Screen();
const loggedOut = new Screen();

const centerX = width / 2;
const text = 'Choose your login:';

for (const screen of [loggedOut, loggedIn]) {
  screen.addInstruction([ 'text', [ text, centerX, 50,
    '50px serif'] ]);
  createButton(screen, 0, 0, 100, 30,
    'Back', 'screens/initial.js');
  createButton(screen, centerX - 100, 100, 100, 50,
    '')
}

module.exports = login => {
  if (login) return loggedIn;
  return loggedOut;
};
