import GridItem from "../GridItem/GridItem";
import classes from "./GridItemsContainer.module.css";
import enjoyOnTv from "../../assets/img/enjoyOnTv.png";
import watchEverywhere from "../../assets/img/watchEverywhere.png";
import kids from "../../assets/img/netflixKids.png";
import download from "../../assets/img/download.png";

const itemsData = [
  {
    imgSrc: enjoyOnTv,
    alt: "enjoy_on_your_Tv",
    title: "Enjoy on your TV.",
    text: "Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.",
  },
  {
    imgSrc: watchEverywhere,
    alt: "watch_everywhere",
    title: "Watch everywhere.",
    text: "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more.",
  },
  {
    imgSrc: kids,
    alt: "create_profiles_for_kids",
    title: "Create profiles for kids.",
    text: "Send kids on adventures with their favorite characters in a space made just for them—free with your membership.",
  },
  {
    imgSrc: download,
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
            className=""
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
