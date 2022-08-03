import React, { useState } from "react";
import About from "./components/About"
import GameBoard from "./components/GameBoard"

function App() {
  const [mode, setMode] = useState("game");
  const [score, setScore] = useState(0);
  const [hiScore, setHiScore] = useState(0);

  const toggleMode = () => {
    if (mode === "game") {
      setMode("about");
    } else {
      setMode("game");
    }
  };

  const setHi = () => {
    if (score > hiScore) {
      setHiScore(score);
    }
  }

  const setGame = () => {
    setScore(score + 1);
  }

  const resetGame = () => {
    setScore(0);
  }

  const gameProps = {
    gameScore: setGame,
    gameReset: resetGame,
    gameHi: setHi
  };

  return (
    <div className="App">
      <header>
        <h1>memory card</h1>
        <div className="score-box">
          <div className="score"><span>current score:  </span><span>{score}</span></div>
          <div className="score"><span>high score:  </span><span>{hiScore}</span></div>
          <div className="about-button"><button onClick={toggleMode}>about</button></div>
        </div>
        
      </header>
      <main>
        {mode === "game" ? <GameBoard gameProps={gameProps}/> : <About toggleMode={toggleMode}/>}
      </main>
    </div>
  );
}

export default App;
