'use strict';

const { Screen, width } = require('../library/screen.js');
const createButton = require('../library/createButton.js');

const loggedIn = new Screen();
const loggedOut = new Screen();
const centerX = width / 2;

for (const screen of [loggedIn, loggedOut]) {
  createButton(screen, 0, 0, 100, 30,
    'Back', 'screens/initial.js');
  createButton(loggedOut, 0, 0, 100, 30,
    'Back', 'screens/initial.js');
}

loggedOut.addInstruction([ 'text', [ 'You should log in first', centerX, 50,
  '50px serif'] ]);


module.exports = login => {
  if (login) return loggedIn;
  return loggedOut;
};
