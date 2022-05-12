import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import Player from "./components/Player/Player";

const App = () => {
  const [songs, setSongs] = useState([
    {
      title: "Kaparah",
      artist: "Avraham Fried",
      album: " BHD",
      track: "6",
      // "year": "1",
      img_src:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP6XsQ5ol2fV-cy7g6HbIqVNiiG88iwapK1ulkodJek9nPUpq6DGzimZmdrxFkguUmib0&usqp=CAU",
      src: "./music/Kaparah.mp3",
    },
    {
      title: "[oops]",
      artist: "potsu",
      album: "[oops]",
      track: "1",
      year: "",
      img_src:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP6XsQ5ol2fV-cy7g6HbIqVNiiG88iwapK1ulkodJek9nPUpq6DGzimZmdrxFkguUmib0&usqp=CAU",
      src: "./songs/[oops].mp3",
    },
  ]);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
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
