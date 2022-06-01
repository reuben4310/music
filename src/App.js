import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import Player from "./components/Player/Player";

const App = () => {
  const [songs, setSongs] = useState([
    {
      title: "Kaparah",
      artist: "Avraham Fried",
      album: " Bring The House Down",
      img_src:
        "https://www.nigunmusic.com/media/catalog/product/cache/47575b44fb65aa0dba72a7d894492d3c/b/r/bringthehousedown.jpg",
      src: "./music/Kaparah.mp3",
    },
    {
      title: "לך יוצר הכל",
      artist: "MBD",
      img_src:
        "https://cdn.shopify.com/s/files/1/0420/2505/products/WhatsAppImage2022-03-09at12.46.23PM_2000x.jpg?v=1647921739",
      src: "./music/לך יוצר הכל.mp3",
    },
    {
      title: "מלא כל הארץ כבודו",
      artist: "MBD",
      img_src:
        "https://cdn.shopify.com/s/files/1/0420/2505/products/WhatsAppImage2022-03-09at12.46.23PM_2000x.jpg?v=1647921739",
      src: "./music/מלא כל הארץ כבודו.mp3",
    },
    {
      title: "Kaparah",
      artist: "Avraham Fried",
      album: " Bring The House Down",
      img_src:
        "https://www.nigunmusic.com/media/catalog/product/cache/47575b44fb65aa0dba72a7d894492d3c/b/r/bringthehousedown.jpg",
      src: "./music/Kaparah.mp3",
    },
    {
      title: "לך יוצר הכל",
      artist: "MBD",
      img_src:
        "https://cdn.shopify.com/s/files/1/0420/2505/products/WhatsAppImage2022-03-09at12.46.23PM_2000x.jpg?v=1647921739",
      src: "./music/לך יוצר הכל.mp3",
    },
    {
      title: "מלא כל הארץ כבודו",
      artist: "MBD",
      img_src:
        "https://cdn.shopify.com/s/files/1/0420/2505/products/WhatsAppImage2022-03-09at12.46.23PM_2000x.jpg?v=1647921739",
      src: "./music/מלא כל הארץ כבודו.mp3",
    },
    {
      title: "Kaparah",
      artist: "Avraham Fried",
      album: " Bring The House Down",
      img_src:
        "https://www.nigunmusic.com/media/catalog/product/cache/47575b44fb65aa0dba72a7d894492d3c/b/r/bringthehousedown.jpg",
      src: "./music/Kaparah.mp3",
    },
    {
      title: "לך יוצר הכל",
      artist: "MBD",
      img_src:
        "https://cdn.shopify.com/s/files/1/0420/2505/products/WhatsAppImage2022-03-09at12.46.23PM_2000x.jpg?v=1647921739",
      src: "./music/לך יוצר הכל.mp3",
    },
    {
      title: "מלא כל הארץ כבודו",
      artist: "MBD",
      img_src:
        "https://cdn.shopify.com/s/files/1/0420/2505/products/WhatsAppImage2022-03-09at12.46.23PM_2000x.jpg?v=1647921739",
      src: "./music/מלא כל הארץ כבודו.mp3",
    },
    {
      title: "Kaparah",
      artist: "Avraham Fried",
      album: " Bring The House Down",
      img_src:
        "https://www.nigunmusic.com/media/catalog/product/cache/47575b44fb65aa0dba72a7d894492d3c/b/r/bringthehousedown.jpg",
      src: "./music/Kaparah.mp3",
    },
    {
      title: "לך יוצר הכל",
      artist: "MBD",
      img_src:
        "https://cdn.shopify.com/s/files/1/0420/2505/products/WhatsAppImage2022-03-09at12.46.23PM_2000x.jpg?v=1647921739",
      src: "./music/לך יוצר הכל.mp3",
    },
    {
      title: "מלא כל הארץ כבודו",
      artist: "MBD",
      img_src:
        "https://cdn.shopify.com/s/files/1/0420/2505/products/WhatsAppImage2022-03-09at12.46.23PM_2000x.jpg?v=1647921739",
      src: "./music/מלא כל הארץ כבודו.mp3",
    },
    {
      title: "Kaparah",
      artist: "Avraham Fried",
      album: " Bring The House Down",
      img_src:
        "https://www.nigunmusic.com/media/catalog/product/cache/47575b44fb65aa0dba72a7d894492d3c/b/r/bringthehousedown.jpg",
      src: "./music/Kaparah.mp3",
    },
    {
      title: "לך יוצר הכל",
      artist: "MBD",
      img_src:
        "https://cdn.shopify.com/s/files/1/0420/2505/products/WhatsAppImage2022-03-09at12.46.23PM_2000x.jpg?v=1647921739",
      src: "./music/לך יוצר הכל.mp3",
    },
    {
      title: "מלא כל הארץ כבודו",
      artist: "MBD",
      img_src:
        "https://cdn.shopify.com/s/files/1/0420/2505/products/WhatsAppImage2022-03-09at12.46.23PM_2000x.jpg?v=1647921739",
      src: "./music/מלא כל הארץ כבודו.mp3",
    },
    {
      title: "Kaparah",
      artist: "Avraham Fried",
      album: " Bring The House Down",
      img_src:
        "https://www.nigunmusic.com/media/catalog/product/cache/47575b44fb65aa0dba72a7d894492d3c/b/r/bringthehousedown.jpg",
      src: "./music/Kaparah.mp3",
    },
    {
      title: "לך יוצר הכל",
      artist: "MBD",
      img_src:
        "https://cdn.shopify.com/s/files/1/0420/2505/products/WhatsAppImage2022-03-09at12.46.23PM_2000x.jpg?v=1647921739",
      src: "./music/לך יוצר הכל.mp3",
    },
    {
      title: "מלא כל הארץ כבודו",
      artist: "MBD",
      img_src:
        "https://cdn.shopify.com/s/files/1/0420/2505/products/WhatsAppImage2022-03-09at12.46.23PM_2000x.jpg?v=1647921739",
      src: "./music/מלא כל הארץ כבודו.mp3",
    },
    {
      title: "Kaparah",
      artist: "Avraham Fried",
      album: " Bring The House Down",
      img_src:
        "https://www.nigunmusic.com/media/catalog/product/cache/47575b44fb65aa0dba72a7d894492d3c/b/r/bringthehousedown.jpg",
      src: "./music/Kaparah.mp3",
    },
    {
      title: "לך יוצר הכל",
      artist: "MBD",
      img_src:
        "https://cdn.shopify.com/s/files/1/0420/2505/products/WhatsAppImage2022-03-09at12.46.23PM_2000x.jpg?v=1647921739",
      src: "./music/לך יוצר הכל.mp3",
    },
    {
      title: "מלא כל הארץ כבודו",
      artist: "MBD",
      img_src:
        "https://cdn.shopify.com/s/files/1/0420/2505/products/WhatsAppImage2022-03-09at12.46.23PM_2000x.jpg?v=1647921739",
      src: "./music/מלא כל הארץ כבודו.mp3",
    },
    {
      title: "Kaparah",
      artist: "Avraham Fried",
      album: " Bring The House Down",
      img_src:
        "https://www.nigunmusic.com/media/catalog/product/cache/47575b44fb65aa0dba72a7d894492d3c/b/r/bringthehousedown.jpg",
      src: "./music/Kaparah.mp3",
    },
    {
      title: "לך יוצר הכל",
      artist: "MBD",
      img_src:
        "https://cdn.shopify.com/s/files/1/0420/2505/products/WhatsAppImage2022-03-09at12.46.23PM_2000x.jpg?v=1647921739",
      src: "./music/לך יוצר הכל.mp3",
    },
    {
      title: "מלא כל הארץ כבודו",
      artist: "MBD",
      img_src:
        "https://cdn.shopify.com/s/files/1/0420/2505/products/WhatsAppImage2022-03-09at12.46.23PM_2000x.jpg?v=1647921739",
      src: "./music/מלא כל הארץ כבודו.mp3",
    },
  ]);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);
  const userAccessToken =
    "BQDgPh4o4L1uQ8dsE3y65d5uHTVhEFMrkBRSEV1d0cj3MlZeLpxwm-gfcwOVyaDFLguiQioZwmYapBrYZIC2ZtJQLx93QeH5TOify3begL5ccosbL3RPs-I9-NFsMmEQncAgi6q7LEiqSZsawu61Vql_VKje54vHTuK6wXkYuFU32WXa033B5rH9E7Nxj4olHIqT7BpDreNiHWp99qxjquQN-NG4tM0XHP3q8reMgur3LGg0uADPK_H8Nj4NOVvUOLZtTAhntyQUVnI4_xLK69p_oxouU6o-p38wYchs";

  // const s = fetch(
  //   "https://api.spotify.com/v1/users/8ntve71k2amzvqhr0mtfmo3ql/playlists?offset=0&limit=20",
  //   {
  //     method: "GET",
  //     headers: {
  //       Authorization: `Bearer ${userAccessToken}`,
  //     },
  //   }
  // )
  //   .then((response) => response.json())
  //   .then(({ items }) => {
  //     items.forEach((beat, index) => {
  //       console.log(`Beat ${index} starts at ${(beat.name, beat.external_urls.spotify)}`);
  //     });
  //   });
  // console.log(s);

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
