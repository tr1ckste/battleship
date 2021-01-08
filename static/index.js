'use strict';

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

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
  }
};

const url = 'screens/nextimg.js';

fetch(url, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ ctx, buttons: ['first', 'second'] })
}).then(screen => screen.json()
  .then(screen => {
    const { instructions } = screen;
    console.log(instructions);
    for (const instruction of instructions) {
      const comm = comms[instruction.name];
      console.log(comm);
      comm(...instruction.args);
    }
  }));
