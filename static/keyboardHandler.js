const keyboardHandlers = [
  {
    keys: alphabetLetters,
    handler: ({ key, y, size, carriage, state }) => {
      if (state.inputResult.length == MAX_INPUT_SIZE) return;
      comms.text(key, carriage, y, `${size}px serif`);
      state.carriage += size;
      state.inputResult += key;
    }
  },
  {
    keys: ['Backspace'],
    handler: ({ y, size, carriage, state }) => {
      console.log(state);
      if (state.inputResult.length <= 0) return;
      state.carriage -= size;
      ctx.fillStyle = "white";
      ctx.fillRect(carriage - 1.5 * size, y - 1.5 * size, size, size * 2);
      ctx.fillStyle = "black";
      state.inputResult = state.inputResult.slice(0, state.inputResult.length - 1);
      console.log(state.inputResult);
    }
  }
];