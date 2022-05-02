import Board from "./components/Board";

function App() {
  return (
    <div className="flex flex-col items-center border-4">
      <div className="border-4 p-3 m-5">
        <h1 className="text-4xl my-4">Tic Tac Toe</h1>
        <hr className=" min-w-max" />
      </div>
      <Board />
    </div>
  );
}

export default App;
