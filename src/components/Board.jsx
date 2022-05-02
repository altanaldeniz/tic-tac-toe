import { createContext, useState } from "react";
import Square from "./Square";

const GRID = ["", "", "", "", "", "", "", "", ""];

export const SquareContext = createContext();

const Board = () => {
  const [grid, setGrid] = useState([...GRID]);
  const [turn, setTurn] = useState(true);
  const [gameOver, setGameOver] = useState(false);
  const [gameWinner, setGameWinner] = useState("");
  const [winCount_X, setWinCount_X] = useState(0);
  const [winCount_O, setWinCount_O] = useState(0);

  const restart = () => {
    setGrid([...GRID]);
    setTurn(true);
    setGameWinner("");
    setGameOver(false);
  };

  const checkWin = () => {
    const conditions = [
      [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
      ],
      [
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
      ],
      [
        [0, 4, 8],
        [2, 4, 6],
      ],
    ];

    let x = 0;
    let o = 0;

    conditions.forEach((el) => {
      if (x === 3 || o === 3) return;
      el.forEach((el) => {
        if (x === 3 || o === 3) return;
        console.log(el);
        x = 0;
        o = 0;
        el.forEach((el) => {
          if (grid[el] === "X") x++;
          if (grid[el] === "O") o++;
        });
        console.log(`count of x: ${x}`);
        console.log(`count of o: ${o}`);
      });
    });
    if (x === 3) {
      setGameWinner("X");
      setGameOver(true);
      setWinCount_X(winCount_X + 1);
    } else if (o === 3) {
      setGameWinner("O");
      setGameOver(true);
      setWinCount_O(winCount_O + 1);
    }
  };

  return (
    <div className=" border-4 flex flex-col justify-center items-center p-5 my-4">
      <h1>
        {gameWinner === "X"
          ? "X won!"
          : gameWinner === "O"
          ? "O won!"
          : gameOver
          ? "Draw!"
          : turn
          ? "X's turn"
          : "O's turn"}
      </h1>
      <SquareContext.Provider
        value={{
          grid,
          setGrid,
          turn,
          setTurn,
          gameOver,
          setGameOver,
          checkWin,
        }}
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
      <div className="my-2 flex flex-col justify-center items-center">
        <span>X Wins: {winCount_X}</span>
        <span>O Wins: {winCount_O}</span>
      </div>
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
