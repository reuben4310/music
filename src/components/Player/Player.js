import React, { useState, useRef, useEffect } from "react";
import PlayerDetails from "./Details";
import PlayerControls from "./Controls";

function Player(props) {
  const audioElement = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  console.log(props.songs[props.currentSongIndex].src);
  useEffect(() => {
    if (isPlaying) {
      audioElement.current.play();
    } else {
      audioElement.current.pause();
    }
  });

  const SkipSong = (forwards = true) => {
    if (forwards) {
      props.setCurrentSongIndex(() => {
        return (props.currentSongIndex + 1) % props.songs.length;
      });
    } else {
      props.setCurrentSongIndex(() => {
        let temp = props.currentSongIndex;
        temp--;

        if (temp < 0) {
          temp = props.songs.length - 1;
        }

        return temp;
      });
    }
  };
  console.log(props.currentSongIndex);
  const myCallback = () => {
    props.setCurrentSongIndex(
      (props.currentSongIndex + 1) % props.songs.length
    );
  };
  return (
    <>
      <div className="music-player">
        <audio
          onEnded={() => myCallback()}
          src={props.songs[props.currentSongIndex].src}
          ref={audioElement}
        ></audio>
        <PlayerDetails song={props.songs[props.currentSongIndex]} />

        <PlayerControls
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          SkipSong={SkipSong}
        />

        <p>
          <div className="text-anim">
            <strong>Upcoming Song:</strong>
          </div>

          <div className="nextsong-details">
            <img
              src={props.songs[props.nextSongIndex].img_src}
              alt={props.songs[props.nextSongIndex].title}
              style={{ width: "4em", height: "auto", textAlign: "center" }}
            />
            <p>
              <b>{props.songs[props.nextSongIndex].title} </b>&nbsp; by &nbsp;
              <b>{props.songs[props.nextSongIndex].artist}</b>
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
