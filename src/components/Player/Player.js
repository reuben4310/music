import React, { useState, useRef, useEffect } from "react";
import PlayerDetails from "./Details";
import PlayerControls from "./Controls";

function Player({
  currentSongIndex,
  nextSongIndex,
  setCurrentSongIndex,
  songs,
}) {
  const audioElement = useRef(null);
  console.log("audioElement", audioElement);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (isPlaying) {
      audioElement.current.play();
    } else {
      audioElement.current.pause();
    }
  });

  // const skipSong = (forwards = true) => {
  //   if (forwards) {
  //     setCurrentSongIndex(() => {
  //       return Math.floor(Math.random() * songs.length);
  //     });
  //   } else {
  //     setCurrentSongIndex(() => {
  //       let temp = currentSongIndex;
  //       temp--;

  //       if (temp < 0) {
  //         temp = songs.length - 1;
  //       }

  //       return temp;
  //     });
  //   }
  // };

  const myCallback = () => {
    setCurrentSongIndex((currentSongIndex + 1) % songs.length);
  };
  return (
    <>
      <div className="music-player">
        <audio
          onEnded={() => myCallback()}
          src={songs[currentSongIndex].src}
          ref={audioElement}
        ></audio>
        <PlayerDetails song={songs[currentSongIndex]} />

        <PlayerControls
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          // skipSong={skipSong}
        />
        <p>
          <div className="text-anim">
            <strong>Upcoming Song:</strong>
          </div>

          <div className="nextsong-details">
            <img
              src={songs[nextSongIndex].img_src}
              alt={songs[nextSongIndex].title}
              style={{ width: "4em", height: "auto", textAlign: "center" }}
            />
            <p>
              <b>{songs[nextSongIndex].title} </b>&nbsp; by &nbsp;
              <b>{songs[nextSongIndex].artist}</b>
            </p>
          </div>
        </p>
        <div className="player__footer">
          <ul className="list list--footer">
            <li>
              <a href="#" className="list__link">
                <i className="fa fa-heart-o"></i>
              </a>
            </li>

            <li>
              <a href="#" className="list__link">
                <i className="fa fa-random"></i>
              </a>
            </li>

            <li>
              <a href="#" className="list__link">
                <i className="fa fa-undo"></i>
              </a>
            </li>

            <li>
              <a href="#" className="list__link">
                <i className="fa fa-ellipsis-h"></i>
              </a>
            </li>
          </ul>
        </div>
        {/* <h4>Lofi Music Player React </h4> */}
      </div>
    </>
  );
}
export default Player;
