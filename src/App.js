import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import Player from "./components/Player/Player";
// const userAccessToken =
//   "BQAWk0bpM1uBHFQrNIGeTXJUf1zDvwVWn4eOVEzbiFT-68WvG89fA9h_18_VPsIhYo73ycyeFEYSGJUCh4Ejp5mNWkaZK23jDNxzxYPmFBfyjqstZPZ4TZlJzJpBO2MFe190fLfB_NaYDCHmZFxsI63_9kMe1YpTOzCp9DrTETUoCispM8Cpemx5mXei1-S7-gVT8HXwPC7zbPkajRTzniCFzswd3VzIwXeNP1bnrDsPznzEjkJmgyn38KvHkDIZJWUlXMPuQX5FELdDpJ_DhSMMhWJRyQhAp1M4GzEu";

// const s = fetch(
//   "https://api.spotify.com/v1/users/8ntve71k2amzvqhr0mtfmo3ql/playlists/5XV1ju6mjnWESZmf0bJjWC",
//   {
//     method: "GET",
//     headers: {
//       Authorization: `Bearer ${userAccessToken}`,
//     },
//   }
// )
//   .then((response) => response.json())
//   .then(({ tracks }) => {
//     tracks.items.forEach((beat, index) => {
//       console.log(
//         `Beat ${index} starts at ${(beat.track.name, beat.track.uri)}`
//       );
//     });
//   });

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
  // const userAccessToken =
  //   "BQD-8RvVbmDpf24_JCFJ0oyAXKt-UUlurN_jJQxAuGA39Y88hkM-HQIJP_mLOVm5fahMF1Jwcyb1B_bdwBdOwIb1_pfEZuo8J-tSyS7WMc40Z65HRyE5d8wdLuuZbyaOjCZvzJp4IXAZVfNtdN6nEqo8ZJk36ITlObe0-2D738Eji0t1Zoof2rVObpArwK7Gci5NqIM51zWpiS3ariUfYFuVArqMCHOZe9Kd9LvDuELDXCCMHkn7-7qpALS-bJwe47SE18_kvw54itD7TfFF4686OAJpnPWaFfuFN4Pf";

  // const s = fetch(
  //   "https://api.spotify.com/v1/users/8ntve71k2amzvqhr0mtfmo3ql/playlists/5XV1ju6mjnWESZmf0bJjWC",
  //   {
  //     method: "GET",
  //     headers: {
  //       Authorization: `Bearer ${userAccessToken}`,
  //     },
  //   }
  // )
  //   .then((response) => response.json())
  //   .then(({ tracks }) => {
  //     tracks.items.forEach((beat, index) => {
  //       console.log(`Beat ${index} starts at ${beat.track.name}`);
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
