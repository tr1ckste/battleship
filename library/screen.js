'use strict';
const width = 900;
const heigth = 600;

class Button {
  constructor([ x1, y1, x2, y2, url ]) {
    this.coords = { x1, y1, x2, y2 };
    this.url = url;
  }
}

class Instruction {
  constructor([ name, args ]) {
    this.name = name;
    this.args = args;
  }
}

class Screen {
  constructor() {
    this.buttons = [];
    this.instructions = [];
    this.inputField = null;
    this.inputResult = '';
    this.carriage = null;
  }
  addButton(arr) {
    this.buttons.push(new Button(arr));
  }
  addInstruction(arr) {
    this.instructions.push(new Instruction(arr));
  }
}

module.exports = { Screen, width, heigth };
