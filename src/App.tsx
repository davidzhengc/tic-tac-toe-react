import { useState, useEffect, useCallback } from "react";
import "./App.css";
import MainMenu from "./components/MainMenu";
import Board from "./components/Board";

type GameView = "menu" | "game";
type GameMode = "1p" | "2p";
type Difficulty = "easy" | "medium" | "impossible";

// Game logic functions
function checkForWinner(squares: (string | null)[]) {
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
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

const getRandomMove = (squares: (string | null)[]) => {
  const availableMoves = squares
    .map((square, index) => (square === null ? index : null))
    .filter((val) => val !== null) as number[];
  const randomIndex = Math.floor(Math.random() * availableMoves.length);
  return availableMoves[randomIndex];
};

const getBestMove = (currentSquares: (string | null)[]): number => {
  // Minimax algorithm implementation
  const minimax = (
    squares: (string | null)[],
    isMaximizing: boolean
  ): number => {
    const winner = checkForWinner(squares);
    if (winner === "O") return 10;
    if (winner === "X") return -10;
    if (squares.every((square) => square !== null)) return 0;

    const emptySquares = squares
      .map((square, index) => (square === null ? index : null))
      .filter((index): index is number => index !== null);

    if (isMaximizing) {
      let bestScore = -Infinity;
      for (const index of emptySquares) {
        const newSquares = [...squares];
        newSquares[index] = "O";
        const score = minimax(newSquares, false);
        bestScore = Math.max(score, bestScore);
      }
      return bestScore;
    } else {
      let bestScore = Infinity;
      for (const index of emptySquares) {
        const newSquares = [...squares];
        newSquares[index] = "X";
        const score = minimax(newSquares, true);
        bestScore = Math.min(score, bestScore);
      }
      return bestScore;
    }
  };

  const emptySquares = currentSquares
    .map((square, index) => (square === null ? index : null))
    .filter((index): index is number => index !== null);

  let bestScore = -Infinity;
  let bestMove = emptySquares[0];

  for (const index of emptySquares) {
    const newSquares = [...currentSquares];
    newSquares[index] = "O";
    const score = minimax(newSquares, false);
    if (score > bestScore) {
      bestScore = score;
      bestMove = index;
    }
  }

  return bestMove;
};

function App() {
  const [currentView, setCurrentView] = useState<GameView>("menu");
  const [gameMode, setGameMode] = useState<GameMode>("2p");
  const [difficulty, setDifficulty] = useState<Difficulty>("medium");
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));

  // AI Move function
  const makeAIMove = useCallback(
    (currentSquares: (string | null)[], currentDifficulty: Difficulty) => {
      const emptySquares = currentSquares
        .map((square, index) => (square === null ? index : null))
        .filter((index): index is number => index !== null);

      if (emptySquares.length === 0) return;

      let aiMove: number;

      switch (currentDifficulty) {
        case "easy":
          // Easy: Random moves
          aiMove = getRandomMove(currentSquares);
          break;

        case "medium":
          // Medium: Try to win, then block, then random
          aiMove = -1;

          // Try to win if possible
          for (const index of emptySquares) {
            const testSquares = [...currentSquares];
            testSquares[index] = "O"; // AI is "O"
            if (checkForWinner(testSquares) === "O") {
              aiMove = index;
              break;
            }
          }
          if (aiMove !== -1) break;

          // BLOCK opponent's winning move
          for (const index of emptySquares) {
            const testSquares = [...currentSquares];
            testSquares[index] = "X"; // Player is "X"
            if (checkForWinner(testSquares) === "X") {
              aiMove = index;
              break;
            }
          }
          if (aiMove !== -1) break;

          // Else Random move
          aiMove = getRandomMove(currentSquares);
          break;

        case "impossible":
          // Impossible: Minimax algorithm for perfect play
          aiMove = getBestMove(currentSquares);
          break;

        default:
          aiMove =
            emptySquares[Math.floor(Math.random() * emptySquares.length)];
      }

      // Simulate AI thinking delay
      setTimeout(() => {
        const nextSquares = [...currentSquares];
        nextSquares[aiMove] = "O";
        setSquares(nextSquares);
        setXIsNext(true);
      }, 500);
    },
    []
  );

  // Handle AI move when it's AI's turn
  useEffect(() => {
    if (
      gameMode === "1p" &&
      !xIsNext &&
      !checkForWinner(squares) &&
      squares.some((square) => square === null)
    ) {
      makeAIMove(squares, difficulty);
    }
  }, [xIsNext, squares, gameMode, difficulty, makeAIMove]);

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

  const startGame = (mode: GameMode, difficulty?: Difficulty) => {
    setCurrentView("game");
    setGameMode(mode);
    if (difficulty) setDifficulty(difficulty);
    resetGame();
  };

  const goToMenu = () => {
    setCurrentView("menu");
  };

  // Render different views based on currentView state
  if (currentView === "menu") {
    return <MainMenu onStartGame={startGame} />;
  }

  return (
    <div className="tic-tac-toe-container">
      <h1> Tic Tac Toe </h1>
      {gameMode === "1p" ? (
        <h2>
          {" "}
          {`Difficulty: ${
            difficulty.charAt(0).toUpperCase() + difficulty.slice(1)
          }`}{" "}
        </h2>
      ) : null}
      <h2> {statusMessage} </h2>
      <Board
        squares={squares}
        onSquareClick={(i) => {
          if (winner || squares[i]) return;
          if (gameMode === "1p" && !xIsNext) return;

          const nextSquares = squares.slice();
          nextSquares[i] = xIsNext ? "X" : "O";
          setSquares(nextSquares);
          setXIsNext(!xIsNext);
        }}
      />
      <button className="game-button" onClick={resetGame}>
        Reset Game
      </button>
      <button className="game-button" onClick={goToMenu}>
        Go Back To Menu
      </button>
    </div>
  );
}

export default App;
