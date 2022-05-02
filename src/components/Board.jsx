import { createContext, useState } from "react";
import Square from "./Square";

const GRID = ["", "", "", "", "", "", "", "", ""];

export const SquareContext = createContext();

const Board = () => {
  const [grid, setGrid] = useState([...GRID]);
  const [turn, setTurn] = useState(true);
  const [gameOver, setGameOver] = useState(false);

  const restart = () => {
    setGrid([...GRID]);
    setTurn(true);
    setGameOver(false);
  };

  return (
    <div className=" border-4 flex flex-col justify-center items-center p-5 my-4">
      <h1>{turn ? "X" : "O"}'s turn</h1>
      <SquareContext.Provider
        value={{ grid, setGrid, turn, setTurn, gameOver, setGameOver }}
      >
        <div className="flex flex-col gap-2 p-5">
          <div className="flex gap-2">
            <Square label={0} />
            <Square label={1} />
            <Square label={2} />
          </div>
          <div className="flex gap-2">
            <Square label={3} />
            <Square label={4} />
            <Square label={5} />
          </div>
          <div className="flex gap-2">
            <Square label={6} />
            <Square label={7} />
            <Square label={8} />
          </div>
        </div>
      </SquareContext.Provider>
      <span>X Wins: 0</span>
      <span>O Wins: 0</span>
      <button
        onClick={restart}
        className="my-2 p-4 bg-gray-200 hover:bg-gray-300"
      >
        {gameOver ? "Play again?" : "Restart"}
      </button>
    </div>
  );
};

export default Board;
