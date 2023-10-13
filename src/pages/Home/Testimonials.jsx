import React,{ useState } from "react";
import { leftArrow, rightArrow } from "../../assets";
import SectionWrapper from "../../hoc/SectionWrapper";
import { TestimonialData } from "../../data/Constants";
import { useLanguage } from "../../context/LanguageContext";
// this is the Testimonials Section {هذا قسم شهادات او الاراء }
const Testimonials = () => {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const [AnimationDirection, setAnimationDirection] = useState(null);
  const { isRtl, currentLanguage } = useLanguage();
  const handleLeftArrowClick = () => {
    setAnimationDirection("Left");
    setCurrentTestimonialIndex(
      (currentTestimonialIndex - 1 + TestimonialData.length) %
        TestimonialData.length
    );
  };
  const handleRightArrowClick = () => {
    setAnimationDirection("Right");
    setCurrentTestimonialIndex(
      (currentTestimonialIndex + 1) % TestimonialData.length
    );
  };
  return (
    <div className="relative">
      {TestimonialData.map((testimonial, index) => {
        if (index === currentTestimonialIndex) {
          // Only render the active testimonial
          return (
            <div
              className={`w-[350px] md:w-[650px] lg:w-[750px] bg-white md:h-72 flex flex-col-reverse justify-between md:flex-row items-center md:items-start relative TestimonailsCard ${AnimationDirection} `}
              key={index}
            >
              <div className="text-center flex-col flex self-center gap-10 py-8">
                <p className="font-bold text-xl h-full text-[#5c5c5c] relative px-5">
                  <span>❞</span>
                  {currentLanguage[testimonial.speech]}
                  <span>❝</span>
                </p>
                <span className="before:block before:absolute w-fit self-center before:-skew-y-3 before:-inset-1 before:bg-primary relative inline-block">
                  <h5 className="font-medium text-sm relative text-white">
                    - {currentLanguage[testimonial.name]}
                  </h5>
                </span>
              </div>
              <img
                src={testimonial.image}
                alt=""
                className="w-full md:w-60 h-44 md:h-full object-top object-cover"
              />
              <div className={`TestimonailsBackCard ${AnimationDirection}`} />
            </div>
          );
        } else {
          // Don't render inactive testimonials
          return null;
        }
      })}
      <img
        src={rightArrow}
        alt="right arrow icon"
        className="absolute top-[50%] translate-y-[-50%] md:w-16 w-10 md:-right-12 -right-8 cursor-pointer"
        onClick={handleRightArrowClick}
      />
      <img
        src={leftArrow}
        alt="left arrow icon"
        className="absolute top-[50%] translate-y-[-50%] md:w-16 w-10 md:-left-12 -left-8 cursor-pointer"
        onClick={handleLeftArrowClick}
      />
      {/* dots */}
      <div
        className={`absolute -bottom-6 w-full flex justify-center mt-4 ${
          isRtl ? "flex-row-reverse" : ""
        }`}
      >
        {TestimonialData.map((_, index) => (
          <span
            key={index}
            className={`w-2 h-2 rounded-full mx-1 cursor-pointer transition-all ${
              index === currentTestimonialIndex
                ? "bg-primary scale-125"
                : "bg-gray-400"
            }`}
            onClick={() => {
              setCurrentTestimonialIndex(index);
            }}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Testimonials);
