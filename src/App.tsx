import "./App.css";
import { VIDEO_URLS } from "./helpers/variables";

import tvImg from "./assets/img/tv.png";
import devicePile from "./assets/img/device-pile.png";
import netflixKids from "./assets/img/netflix-kids.png";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Background from "./components/Backgorund/Background";
import AdsPlan from "./components/AdsPlan/AdsPlan";
import SectionItem from "./components/SectionItem/SectionItem";

function App() {
  return (
    <main>
      <Background>
        <Navbar />
        <Hero />
      </Background>
      <section>
        <AdsPlan />
        <SectionItem
          title={"Enjoy on your TV"}
          text={
            "Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more."
          }
          alt="tv_img"
          imgSrc={tvImg}
          videoSrc={VIDEO_URLS[0]}
        />
        <SectionItem
          title={"Watch everywhere"}
          text={
            "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more."
          }
          alt="device_pile"
          imgSrc={devicePile}
          videoSrc={VIDEO_URLS[1]}
        />
        <SectionItem
          title={"Create profiles for kids."}
          text={
            "Send kids on adventures with their favorite characters in a space made just for them—free with your membership."
          }
          alt="netflix_kids"
          imgSrc={netflixKids}
        />
      </section>
    </main>
  );
}

export default App;
