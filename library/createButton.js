'use strict';

module.exports = (screen, stX, stY, width, height, text, nextUrl) => {
  const fshX = stX + width;
  const fshY = stY + height;
  const centerX = (fshX - stX) / 2 + stX;
  const delta = height / 10;

  screen.addInstruction([ 'rect', [stX, stY, fshX, fshY] ]);
  screen.addInstruction([ 'textAlign', ['center'] ]);
  screen.addInstruction([ 'text', [ text, centerX, stY + height - delta,
    `${height}px serif`] ]);

  screen.addButton([ stX, stY, fshX, fshY, nextUrl ]);
};
