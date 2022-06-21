import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import Player from "./components/Player/Player";
import songsList from "./components/songsList";

const App = () => {
  const [songs, setSongs] = useState(songsList);

  const random = Math.floor(Math.random() * songs.length);
  const [currentSongIndex, setCurrentSongIndex] = useState(random);
  console.log(songs);
  const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex]);

  return (
    <div className="App">
      <Player
        currentSongIndex={currentSongIndex}
        setCurrentSongIndex={setCurrentSongIndex}
        nextSongIndex={nextSongIndex}
        songs={songs}
      />
    </div>
  );
};

export default App;
