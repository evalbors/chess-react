import './assets/css/App.css';

import Board from './components/Board';
import Piece from './components/Piece';

function HelloWorld(name){
  var presentation = (
  <div>
    <small>Hi there, I'm {name}</small>
  </div>
  
  );

  return presentation;
}

function App() {
  var name = "Eva";

  return (
    <div className="App">
      
      <main className="grid">
        <Board
          id="board-1"
          className="board"
        >
          <Piece
            id="piece-1"
            className="piece"
            draggable="true"
          >
            <p>Piece one</p>
          </Piece>
        </Board>

        <Board
          id="piece-2"
          className="board"
        >
          <Piece
            id="card-2"
            className="piece"
            draggable="true"
          >
            <p>Piece two</p>
          </Piece>
        </Board>
      </main>
    </div>
  );
}

export default App;
