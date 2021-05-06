export const gameService = { createBoard };

function createBoard() {
  let board = [];

  for (let i = 0; i < 6; i++) {
    let column = [];
    for (let j = 0; j < 7; j++) {
      column.push(0);
    }
    board.push(column);
  }
  return board;
}
