'use strict';
const { Screen, width } = require('../library/screen.js');
const createButton = require('../library/createButton.js');
const loggedIn = new Screen();
const loggedOut = new Screen();

const buttonWidth = 270;
const buttonHeight = 50;

const startX = (width - buttonWidth) / 2;

for (const screen of [loggedIn, loggedOut]) {
  createButton(screen, startX, 50, buttonWidth, buttonHeight,
    'New room', 'screens/newRoom.js');
  createButton(screen, startX, 150, buttonWidth, buttonHeight,
    'Rooms', 'screens/rooms.js');
  createButton(screen, startX, 250, buttonWidth, buttonHeight,
    'Stats', 'screens/stats.js');
}

createButton(loggedIn, 750, 0, 150, 30,
  'logout', 'screens/initial.js');

createButton(loggedOut, 750, 0, 150, 30,
  'Register', 'screens/registerLogin.js');
createButton(loggedOut, 750, 30, 150, 30,
  'Login', 'screens/login.js');

module.exports = login => {
  if (login) return loggedIn;
  return loggedOut;
};
