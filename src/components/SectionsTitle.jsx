import React from "react";
import { styles } from "../styles";
const SectionsTitle = ({ title, subTitle, AddStyle, color, CustomSub }) => {
  return (
    <div className={`flex items-center w-full ${AddStyle}`}>
      <h1
        className={`${styles.sectionHeadText} w-fit relative beforeTitle ${color} z-40`}
      >
        {title}
      </h1>
      {subTitle && ( // Checking if subTitle is provided
        <p
          className={`${styles.sectionSubText} text-center font-[500] w-full md:w-[70%] px-4 ${CustomSub}`}
        >
          {subTitle}
        </p>
      )}
    </div>
  );
};

export default SectionsTitle;
