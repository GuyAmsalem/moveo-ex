import { useState, useEffect } from "react";
import { BoardCell } from "../cmps/BoardCell";
import { gameService } from "../services/game.service";

const PLAYER1 = 1;
const PLAYER2 = 2;

export function MainApp(props) {
  const [board, setBoard] = useState([]);
  const [renderedBoard, setRenderedBoard] = useState([]);
  const [currentPlayer, setCurrentPlayer] = useState("");

  useEffect(() => {
    renderBoard(gameService.createBoard());
    setCurrentPlayer(PLAYER1);
  }, []);

  function play(cords) {
    console.log(board[5]);
    let updatedBoard = board;
    for (let i = 5; i >= 0; i--) {
      if (board[i] && board[i][cords.col] === 0) {
        updatedBoard[i][cords.col] = currentPlayer;
        break;
      }
    }
    renderBoard(updatedBoard);
  }

  function renderBoard(boardProp) {
    let newBoard = [];
    for (let i = 0; i < boardProp.length; i++) {
      let column = [];
      for (let j = 0; j < boardProp[i].length; j++) {
        column.push(
          <BoardCell
            key={`${i}${j}`}
            play={play}
            cords={{ row: i, col: j }}
            identifier={boardProp[i][j]}
          />
        );
      }
      newBoard.push(
        <div key={i} className="board-column">
          {column}
        </div>
      );
    }
    setBoard(boardProp);
    setRenderedBoard(newBoard);
  }

  return <div className="main-app">{renderedBoard}</div>;
}
