import { sectionContent } from "../../data/content";
import SectionItem from "../SectionItem/SectionItem";

const SectionsContainer = () => {
  return (
    <>
      {sectionContent.map((content: any) => (
        <SectionItem
          title={content.title}
          text={content.text}
          imgSrc={content.imgSrc}
          videoSrc={content.videoSrc}
          alt={content.alt}
          children={content.children}
          key={`${content.alt}_item`}
        />
      ))}
    </>
  );
};
export default SectionsContainer;
