'use strict';
const { Screen, width } = require('../library/screen.js');
const createButton = require('../library/createButton.js');

const loggedIn = new Screen();
const loggedOut = new Screen();

const centerX = width / 2;
const text = 'Choose your login:';
const textY = 50;

const backX = 0;
const backY = 0;
const backWidth = 100;
const backHeight = 30;

const emptyX = centerX - 100;
const emptyY = 100;
const emptyWidth = 100;
const emptyHeight = 100;

for (const screen of [loggedOut, loggedIn]) {
  screen.addInstruction([ 'text', [ text, centerX, textY,
    '50px serif'] ]);
  createButton(screen, backX, backY, backWidth, backHeight,
    'Back', 'screens/initial.js');
  createButton(screen, emptyX, emptyY, emptyWidth, emptyHeight,
    '');
}

module.exports = login => {
  if (login) return loggedIn;
  return loggedOut;
};
