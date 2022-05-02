import Board from "./components/Board";

function App() {
  return (
    <div className="flex flex-col items-center border-4">
      <div className="border-4 p-3 m-5">
        <h1 className="text-4xl my-4">Tic Tac Toe</h1>
        <hr className=" min-w-max" />
      </div>
      <Board />
      <footer className="border-4 p-3 m-5">
        <span>
          View the source code on{" "}
          <a href="https://github.com/altanaldeniz">GitHub</a>
        </span>
      </footer>
    </div>
  );
}

export default App;
