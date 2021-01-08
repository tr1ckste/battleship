'use strict';
const { Screen, width, heigth } = require('../screen.js');
const screen = new Screen();

screen.addInstruction([ 'line', [15, 15, 150, 150] ]);
screen.addInstruction(['rect', [150, 150, 400, 400] ]);
screen.addInstruction([ 'text', ['eto lol eto lil', 250, 250, '25px serif'] ]);

module.exports = screen;
