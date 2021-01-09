'use strict';
const { Screen, width } = require('../library/screen.js');
const createButton = require('../library/createButton.js');
const screen = new Screen();

const buttonWidth = 270;
const buttonHeight = 50;

const startX = (width - buttonWidth) / 2;

createButton(screen, startX, 50, buttonWidth, buttonHeight,
  'New room', 'screens/newRoom.js');
createButton(screen, 750, 0, 150, 30,
  'Register', 'screens/register.js');
createButton(screen, 750, 30, 150, 30,
  'Login', 'screens/login.js');
createButton(screen, startX, 150, buttonWidth, buttonHeight,
  'Rooms', 'screens/rooms.js');
createButton(screen, startX, 250, buttonWidth, buttonHeight,
  'Stats', 'screens/stats.js');

module.exports = screen;
