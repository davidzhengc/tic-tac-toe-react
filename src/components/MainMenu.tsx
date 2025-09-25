import { useState } from "react";
interface MainMenuProps {
  onStartGame: (
    mode: "1p" | "2p",
    difficulty?: "normal" | "impossible"
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
              className="menu-button difficulty-normal"
              onClick={() => onStartGame("1p", "normal")}
            >
              Normal
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
