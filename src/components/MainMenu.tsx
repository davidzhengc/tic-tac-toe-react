import { useState } from "react";
interface MainMenuProps {
  onStartGame: (
    mode: "1p" | "2p",
    difficulty?: "easy" | "medium" | "impossible"
  ) => void;
}

const MainMenu = ({ onStartGame }: MainMenuProps) => {
  const [showDifficulties, setShowDifficulties] = useState(false);

  return (
    <div className="main-menu">
      <h1>Tic Tac Toe</h1>

      {!showDifficulties ? (
        <div className="menu-buttons">
          <button
            className="menu-button"
            onClick={() => setShowDifficulties(true)}
          >
            1 Player Mode (vs AI)
          </button>
          <button className="menu-button" onClick={() => onStartGame("2p")}>
            2 Players Mode
          </button>
        </div>
      ) : (
        <div className="difficulty-menu">
          <h2>Select Difficulty</h2>
          <div className="menu-buttons">
            <button
              className="menu-button difficulty-easy"
              onClick={() => onStartGame("1p", "easy")}
            >
              Easy
            </button>
            <button
              className="menu-button difficulty-medium"
              onClick={() => onStartGame("1p", "medium")}
            >
              Medium
            </button>
            <button
              className="menu-button difficulty-impossible"
              onClick={() => onStartGame("1p", "impossible")}
            >
              Impossible
            </button>
            <button
              className="menu-button difficulty-back"
              onClick={() => setShowDifficulties(false)}
            >
              Back
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MainMenu;
