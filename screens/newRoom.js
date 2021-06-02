'use strict';

const { Screen, width } = require('../library/screen.js');
const createButton = require('../library/createButton.js');

const loggedIn = new Screen();
const loggedOut = new Screen();
const centerX = width / 2;

const x = 0;
const y = 0;
const buttonWidth = 100;
const height = 30;

for (const screen of [loggedIn, loggedOut]) {
  createButton(screen, x, y, buttonWidth, height,
    'Back', 'screens/initial.js');
  createButton(loggedOut, x, y, buttonWidth, height,
    'Back', 'screens/initial.js');
}

loggedOut.addInstruction([ 'text', [ 'You should log in first', centerX, 50,
  '50px serif'] ]);


module.exports = login => {
  if (login) return loggedIn;
  return loggedOut;
};
