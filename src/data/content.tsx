import tvImg from "../assets/img/tv.png";
import devicePile from "../assets/img/device-pile.png";
import netflixKids from "../assets/img/netflix-kids.png";
import mobile from "../assets/img/mobile-0819.jpg";
import Download from "../components/Download/Download";

export const sectionContent = [
  {
    title: "Enjoy on your TV",
    text: "Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.",
    alt: "tv_img",
    imgSrc: tvImg,
    videoSrc:
      "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v",
  },
  {
    title: "Watch everywhere",
    text: "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more.",

    alt: "device_pile",
    imgSrc: devicePile,
    videoSrc:
      "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v",
  },
  {
    title: "Create profiles for kids.",
    text: "Send kids on adventures with their favorite characters in a space made just for them—free with your membership.",

    alt: "netflix_kids",
    imgSrc: netflixKids,
  },
  {
    title: "Download your shows to watch offline.",
    text: "Only available on ad-free plans.",
    alt: "netflix_mobile",
    imgSrc: mobile,
    children: <Download />,
  },
]
