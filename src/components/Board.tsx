import { useState } from "react";

interface SquareProps {
  value: string | null;
}

const Square = ({ value }: SquareProps) => {
  return <button className="square">{value}</button>;
};

const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  return (
    <div className="board">
      {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
        <Square value={squares[index]} />
      ))}
    </div>
  );
};
export default Board;
