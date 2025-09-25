import Square from "./Square";
interface BoardProps {
  squares: (string | null)[];
  onSquareClick: (index: number) => void;
}

const Board = ({ squares, onSquareClick }: BoardProps) => {
  return (
    <div className="board">
      {squares.map((value, index) => (
        <Square
          key={index}
          value={value}
          onSquareClick={() => onSquareClick(index)}
        />
      ))}
    </div>
  );
};
export default Board;
