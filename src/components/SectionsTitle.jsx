import { styles } from "../styles";
import { applyIntersectionObserver } from "../../OnScrollAnimation";
import { useEffect } from "react";
const SectionsTitle = ({ title, subTitle, AddStyle, color, CustomSub }) => {
  useEffect(() => {
    // Call the applyIntersectionObserver function to apply the on scroll animation
    applyIntersectionObserver();
  }, []);
  return (
    <div className={`flex items-center w-full ${AddStyle}`}>
      <h1
        className={`${styles.sectionHeadText} w-fit relative beforeTitle ${color} z-40 OnScrollAnim ation`}
      >
        {title}
      </h1>
      {subTitle && ( // Checking if subTitle is provided
        <p
          className={`${styles.sectionSubText} text-center font-[500] w-full md:w-[70%] px-4 ${CustomSub} `}
        >
          {subTitle}
        </p>
      )}
    </div>
  );
};

export default SectionsTitle;
