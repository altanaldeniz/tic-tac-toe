import Board from './components/Board';

function App() {
  return (
    <div className="flex flex-col items-center">
      <div className="">
        <h1 className="text-4xl my-2">Tic Tac Toe</h1>
        <hr className="min-w-max" />
      </div>
      <Board />
      <footer className="p-3">
        <span>
          View the source code on{' '}
          <a
            className="hover:underline text-blue-500"
            href="https://github.com/altanaldeniz/tic-tac-toe"
          >
            GitHub
          </a>
        </span>
      </footer>
    </div>
  );
}

export default App;
