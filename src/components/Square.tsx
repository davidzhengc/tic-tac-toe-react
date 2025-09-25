interface SquareProps {
  value: string | null;
  onSquareClick: () => void;
}

const Square = ({ value, onSquareClick }: SquareProps) => {
  const squareClass = `square ${value ? value.toLowerCase() : ""}`;
  return (
    <button className={squareClass} onClick={onSquareClick}>
      {value}
    </button>
  );
};

export default Square;
