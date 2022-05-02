import { useContext } from "react";
import { SquareContext } from "./Board";

const Square = ({ label }) => {
  const { grid, setGrid, turn, setTurn, gameOver, setGameOver, checkWin } =
    useContext(SquareContext);

  const handleClick = () => {
    if (gameOver) return;
    if (grid[label] !== "") return;
    let newGrid = grid;
    newGrid[label] = turn ? "X" : "O";
    setGrid(newGrid);
    setTurn(!turn);
    checkWin();
    if (!grid.includes("")) setGameOver(true);
  };

  const usedSquare = grid[label] !== "" ? true : false;

  return (
    <div
      onClick={handleClick}
      className={`h-[100px] w-[100px] flex justify-center items-center bg-gray-200 ${
        usedSquare || gameOver
          ? "cursor-default"
          : "cursor-pointer hover:bg-gray-300"
      }`}
    >
      <span className="text-4xl">{grid[label] ? grid[label] : ""}</span>
    </div>
  );
};

export default Square;
