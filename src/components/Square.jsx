import { useContext } from "react";
import { SquareContext } from "./Board";

const Square = ({ label }) => {
  const { grid, setGrid, turn, setTurn, gameOver, setGameOver } =
    useContext(SquareContext);

  const handleClick = () => {
    if (grid[label] !== "") return;
    if (gameOver) return;
    let newGrid = grid;
    newGrid[label] = turn ? "X" : "O";
    setGrid(newGrid);
    setTurn(!turn);
    if (grid.includes("")) return;
    else setGameOver(true);
  };

  return (
    <div
      onClick={handleClick}
      className="h-[100px] w-[100px] flex justify-center items-center bg-gray-200 hover:bg-gray-300 cursor-pointer"
    >
      <span className="text-4xl">{grid[label] ? grid[label] : ""}</span>
    </div>
  );
};

export default Square;
