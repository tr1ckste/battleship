'use strict';

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const url = 'screens/initial.js';
const getScreen = url => {
  fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(screen => screen.json()
    .then(screen => {
      ctx.clearRect(0, 0, 900, 600);
      const { instructions, buttons } = screen;
      for (const instruction of instructions) {
        const comm = comms[instruction.name];
        comm(...instruction.args);
      }
      canvas.addEventListener('click', event => {
        const { clientX, clientY } = event;
        for (const button of buttons) {
          const { x1, y1, x2, y2 } = button.coords;
          const condition1 = clientX < x2 && clientX > x1;
          const condition2 = clientY < y2 && clientY > y1;
          if (condition1 && condition2) getScreen(button.url);
        }
      });
    }));
};

getScreen(url);
