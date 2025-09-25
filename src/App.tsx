import { useState, useCallback } from "react";
import "./App.css";
import Board from "./components/Board";

function App() {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));

  function checkForWinner(squares: Array<number>) {
    const winningLines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < winningLines.length; i++) {
      const [a, b, c] = winningLines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  }
  const winner = checkForWinner(squares);
  const isDraw = !winner && squares.every((square) => square !== null);

  let statusMessage;
  if (winner) {
    statusMessage = `${winner} wins!`;
  } else if (isDraw) {
    statusMessage = "It's a draw!";
  } else {
    statusMessage = `Turn: ${xIsNext ? "X" : "O"}`;
  }

  const resetGame = () => {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
  };

  return (
    <div className="tic-tac-toe-container">
      <h1> Tic Tac Toe </h1>
      <h2> {statusMessage} </h2>
      <Board
        squares={squares}
        onSquareClick={(i) => {
          if (winner || squares[i]) return;
          const nextSquares = squares.slice();
          nextSquares[i] = xIsNext ? "X" : "O";
          setSquares(nextSquares);
          setXIsNext(!xIsNext);
        }}
      />
      <button
        className="gameButton"
        onClick={resetGame}
        style={{ marginTop: "20px" }}
      >
        Reset Game
      </button>
      <button
        className="gameButton"
        onClick={resetGame}
        style={{ marginTop: "20px" }}
      >
        Go back to Menu
      </button>
    </div>
  );
}

export default App;
