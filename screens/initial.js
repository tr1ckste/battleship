'use strict';
const { Screen, width } = require('../library/screen.js');
const createButton = require('../library/createButton.js');
const loggedIn = new Screen();
const loggedOut = new Screen();

const buttonWidth = 270;
const buttonHeight = 50;

const startX = (width - buttonWidth) / 2;
const startY = 50;
const stepY = 100;

const x = 750;
const y = 0;
const step = 30;
const widthNext = 150;
const heightNext = 30;


for (const screen of [loggedIn, loggedOut]) {
  createButton(screen, startX, startY, buttonWidth, buttonHeight,
    'New room', 'screens/newRoom.js');
  createButton(screen, startX, startY + stepY, buttonWidth, buttonHeight,
    'Rooms', 'screens/rooms.js');
  createButton(screen, startX, startY + 2 * stepY, buttonWidth, buttonHeight,
    'Stats', 'screens/stats.js');
}

createButton(loggedIn, x, y, widthNext, heightNext,
  'logout', 'screens/initial.js');

createButton(loggedOut, x, y, widthNext, heightNext,
  'Register', 'screens/registerLogin.js');
createButton(loggedOut, x, y + step, widthNext, heightNext,
  'Login', 'screens/login.js');

module.exports = login => {
  if (login) return loggedIn;
  return loggedOut;
};
