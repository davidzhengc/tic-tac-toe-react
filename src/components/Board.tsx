import { useState, useCallback } from "react";

interface SquareProps {
  value: string | null;
  onSquareClick?: () => void;
}

const Square = ({ value, onSquareClick }: SquareProps) => {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
};

const Board = () => {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));

  const handleClick = useCallback(
    (i: number) => {
      const nextSquares = squares.slice();
      if (xIsNext) {
        nextSquares[i] = "X";
      } else {
        nextSquares[i] = "O";
      }
      setSquares(nextSquares);
      setXIsNext(!xIsNext);
    },
    [squares]
  );

  return (
    <div className="board">
      {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
        <Square
          key={index}
          value={squares[index]}
          onSquareClick={() => handleClick(index)}
        />
      ))}
    </div>
  );
};
export default Board;
