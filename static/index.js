'use strict';

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const margin = 10;

const state = {
  screen: null,
  login: null
}

const getScreen = async url => {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(state.login)
  });
  return await response.json();
};

const url = 'screens/initial.js';
state.screen = getScreen(url);

const renderScreen = screen => {
  ctx.clearRect(0, 0, 900, 600);
  const { instructions } = screen;
  for (const instruction of instructions) {
    const comm = comms[instruction.name];
    comm(...instruction.args);
  }
};

canvas.addEventListener('click', event => {
  const { clientX, clientY } = event;
  const { buttons } = state.screen;
  const cnvX = clientX - margin;
  const cnvY = clientY - margin;

  for (const button of buttons) {
    const { x1, y1, x2, y2 } = button.coords;
    const condition1 = cnvX < x2 && cnvX > x1;
    const condition2 = cnvY < y2 && cnvY > y1;
    if (condition1 && condition2) {
      getScreen(button.url).then(screen => {
        state.screen = screen;
        renderScreen(state.screen);
      });
    }
  }
});

state.screen.then(screen => {
  state.screen = screen;
  renderScreen(state.screen);
});
