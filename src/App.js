import React, { useLayoutEffect, useRef, useCallback } from "react";
import Phaser from "phaser";
import { phaser } from "./animations/phaser";
import "./App.css";
import { GameEvents } from "./animations/events";

function App() {
  const hasBooted = useRef(false);
  const gameRef = useRef(undefined);
  const animation = useCallback((game) => {
    gameRef.current = game;
  }, []);

  const containerRef = useRef(null);

  useLayoutEffect(() => {
    if (hasBooted.current) {
      return;
    }

    if (!containerRef.current) {
      return;
    }

    const game = phaser({ parent: containerRef.current });
    animation(game);

    hasBooted.current = true;
  }, [animation]);

  const gameStart = useCallback((value) => {
    gameRef.current.events.emit(GameEvents.GAME_START, value.target.value);
  }, []);

  return (
    <div className="App">
      <div ref={containerRef} className="game-root" id="phaser-container"></div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button value="head" onClick={gameStart}>
          1
        </button>
        <button value="tail" onClick={gameStart}>
          ❤️
        </button>
      </div>
    </div>
  );
}

export default App;
