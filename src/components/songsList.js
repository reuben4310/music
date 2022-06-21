const songsList = [
  {
    title: "Kaparah",
    artist: "Avraham Fried",
    album: " Bring The House Down",
    img_src:
      "https://www.nigunmusic.com/media/catalog/product/cache/47575b44fb65aa0dba72a7d894492d3c/b/r/bringthehousedown.jpg",
    src: "./music/Kaparah.mp3",
  },
  {
    title: "Uleini",
    artist: "Ahrele Samet",
    album: " Ahrele",
    img_src:
      "https://cdn.shopify.com/s/files/1/0420/2505/products/Arele_Samet__Booklet_Digital_Stores-page-001_1765x.jpg?v=1526572743",
    src: "./music/Ahrele/01 Uleini.mp3",
  },
  {
    title: "לך יוצר הכל",
    artist: "MBD",
    img_src:
      "https://cdn.shopify.com/s/files/1/0420/2505/products/WhatsAppImage2022-03-09at12.46.23PM_2000x.jpg?v=1647921739",
    src: "./music/Haspuos/לך יוצר הכל.mp3",
  },
  {
    title: "מלא כל הארץ כבודו",
    artist: "MBD",
    img_src:
      "https://cdn.shopify.com/s/files/1/0420/2505/products/WhatsAppImage2022-03-09at12.46.23PM_2000x.jpg?v=1647921739",
    src: "./music/Haspuos/מלא כל הארץ כבודו.mp3",
  },
  {
    title: "Aleh Aleh",
    artist: "Mendy Weiss",
    album: "Aleh Aleh",
    img_src:
      "https://www.eichlers.com/media/catalog/product/cache/dfb531b8d66b2d73d9d75ab9369dca00/M/W/MWA_jpg.jpg",
    src: "./music/Aleh Aleh/01 Aleh Aleh.mp3",
  },
  {
    title: "We've Got The Music II",
    artist: "Journeys 5",
    img_src:
      "https://cdn.shopify.com/s/files/1/0420/2505/products/J5Cover_2000x.jpg?v=1646841905",
    src: "./music/15 We've Got The Music II (Feat. Shmuel Burstein, Eli Kranzler, Rivie Schwebel, Yussi Sonnenblick & Abie Rotenberg).mp3",
  },
  {
    title: "Dovid Hamelech Medley",
    artist: "Ari Reich",
    img_src:
      "https://cdn.shopify.com/s/files/1/0420/2505/products/ari_reich-web_2_2000x.jpg?v=1515623523",
    src: "./music/Ari Reich - Ari Shebachabura @AllJMusic/02 - Dovid Hamelech Medley.mp3",
  },
  {
    title: "B'fi Yeshorim",
    artist: "Eitan Katz",
    album: " Asrecha",
    img_src:
      "https://cdn.shopify.com/s/files/1/0420/2505/products/AshrechaDigital_2000x.png?v=1550592966",
    src: "./music/Ashrecha/B'fi Yeshorim.mp3",
  },
  {
    title: "Peduscha",
    artist: "Boruch Levine",
    img_src: "https://i.ebayimg.com/images/g/M9UAAOSwnhlcFpNV/s-l500.jpg",
    src: "./music/Peduscha/01 Peduscha.mp3",
  },
  {
    title: "והנחילנו",
    artist: "PINI",
    img_src:
      "https://cdn.shopify.com/s/files/1/0420/2505/products/pini_web_1_2000x.jpg?v=1572359621",
    src: "./music/Pini/Pini",
  },
  {
    title: "Koili",
    artist: "Isaac Honig",
    img_src: "https://i.scdn.co/image/ab67616d00001e02806d7cdc880f34c488f0c4fe",
    src: "./music/Adon hakol/02 - Koili.mp3",
  },
  {
    title: "מלא כל הארץ כבודו",
    artist: "MBD",
    img_src:
      "https://cdn.shopify.com/s/files/1/0420/2505/products/WhatsAppImage2022-03-09at12.46.23PM_2000x.jpg?v=1647921739",
    src: "./music/Haspuos/מלא כל הארץ כבודו.mp3",
  },
  {
    title: "Sina",
    artist: "Ahrele",
    album: "Ahrele Samet",
    img_src:
      "https://cdn.shopify.com/s/files/1/0420/2505/products/Arele_Samet__Booklet_Digital_Stores-page-001_1765x.jpg?v=1526572743",
    src: "./music/Ahrele/03 Sina.mp3",
  },
  {
    title: "Naaseh V'nishma",
    artist: "Mendy Weiss",
    img_src:
      "https://www.eichlers.com/media/catalog/product/cache/dfb531b8d66b2d73d9d75ab9369dca00/M/W/MWA_jpg.jpg",
    src: "./music/Aleh Aleh/05 Naaseh V'nishma.mp3",
  },
  {
    title: "Shoichen Ad",
    artist: "Dudi Knopfler",
    img_src:
      "https://cdn.shopify.com/s/files/1/0093/3625/8657/products/N-93641_600x.jpg?v=1636658213",
    src: "./music/Mein Chulem/01 - Shoichen Ad.mp3",
  },
  {
    title: "גבורת הסוס",
    artist: "PINI",
    album: " PINI",
    img_src:
      "https://cdn.shopify.com/s/files/1/0420/2505/products/pini_web_1_2000x.jpg?v=1572359621",
    src: "./music/Pini/Pini/גבורת הסוס.mp3",
  },
  {
    title: "Talmidei Chachumim",
    artist: "Ahrele Samet",
    img_src:
      "https://cdn.shopify.com/s/files/1/0420/2505/products/Arele_Samet__Booklet_Digital_Stores-page-001_1765x.jpg?v=1526572743",
    src: "./music/Ahrele/06  Talmidei Chachumim.mp3",
  },
  {
    title: "Yom Zeh",
    artist: "Mendy Weiss",
    img_src:
      "https://www.eichlers.com/media/catalog/product/cache/dfb531b8d66b2d73d9d75ab9369dca00/M/W/MWA_jpg.jpg",
    src: "./music/Aleh Aleh/03 Yom Zeh.mp3",
  },
  {
    title: "רחם על ציון",
    artist: "MBD",
    album: "Haspuos",
    img_src:
      "https://cdn.shopify.com/s/files/1/0420/2505/products/WhatsAppImage2022-03-09at12.46.23PM_2000x.jpg?v=1647921739",
    src: "./music/Haspuos/06 רחם על ציון.mp3",
  },
  {
    title: "Buchar Buni",
    artist: "Dudi Knopfler",
    img_src:
      "https://cdn.shopify.com/s/files/1/0093/3625/8657/products/N-93641_600x.jpg?v=1636658213",
    src: "./music/Mein Chulem/03 - Buchar Buni.mp3",
  },
  {
    title: "Vhaarev Na",
    artist: "Baruch Levine",
    img_src: "https://i.ebayimg.com/images/g/M9UAAOSwnhlcFpNV/s-l500.jpg",
    src: "./music/Peduscho/Vhaarev Na.mp3",
  },
  {
    title: "ימינא ושמאלא",
    artist: "PINI",
    album: " PINI",
    img_src:
      "https://cdn.shopify.com/s/files/1/0420/2505/products/pini_web_1_2000x.jpg?v=1572359621",
    src: "./music/Pini/Pini/ימינא ושמאלא.mp3",
  },
  {
    title: "Ithcha Ani",
    artist: "Avraham Fried",
    img_src:
      "https://cdn.shopify.com/s/files/1/0420/2505/products/WhatsAppImage2022-03-09at12.46.23PM_2000x.jpg?v=1647921739",
    src: "./music/Ithcha Ani.mp3",
  },
];
export default songsList;
