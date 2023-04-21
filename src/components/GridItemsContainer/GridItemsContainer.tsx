import GridItem from "../GridItem/GridItem";
import classes from "./GridItemsContainer.module.css";

const itemsData = [
  {
    imgSrc: "/src/assets/img/enjoyOntv.png",
    alt: "enjoy_on_your_Tv",
    title: "Enjoy on your TV.",
    text: "Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.",
  },
  {
    imgSrc: "/src/assets/img/watchEverywhere.png",
    alt: "watch_everywhere",
    title: "Watch everywhere.",
    text: "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more.",
  },
  {
    imgSrc: "/src/assets/img/netflixKids.png",
    alt: "create_profiles_for_kids",
    title: "Create profiles for kids.",
    text: "Send kids on adventures with their favorite characters in a space made just for them—free with your membership.",
  },
  {
    imgSrc: "/src/assets/img/download.png",
    alt: "watch_offline",
    title: "Download your shows to watch offline.",
    text: "Only available on ad-free plans.",
  },
];

const GridItemsContainer = (props: any) => {
  return (
    <div className={classes.gridItemsContainer}>
      {itemsData.map((item, index) => {
        return (
          <GridItem
            className={classes.item}
            key={index}
            alt={item.alt}
            src={item.imgSrc}
            title={item.title}
            text={item.text}
          />
        );
      })}
    </div>
  );
};

export default GridItemsContainer;
