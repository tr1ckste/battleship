'use strict';

const comms = {
  line: (x1, y1, x2, y2) => {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
    ctx.closePath();
  },
  rect: (x1, y1, x2, y2) => {
    ctx.strokeRect(x1, y1, x2 - x1, y2 - y1);
  },
  text: (text, x, y, font) => {
    ctx.font = font;
    ctx.fillText(text, x, y);
  },
  textAlign: textAlign => ctx.textAlign = textAlign,
  moveTo: (x, y) => ctx.moveTo(x, y),
  lineTo: (x, y) => ctx.lineTo(x, y),
  stroke: () => ctx.stroke(),
  fill: () => ctx.fill(),
  beginPath: () => ctx.beginPath(),
  closePath: () => ctx.closePath(),
  setLogin: login => state.login = login, 
};
