import { SliderImagesAboutus, SliderTextAboutus } from "../../data/Constants";
import { useLanguage } from "../../context/LanguageContext";
import { useState } from "react";
import { JoinButton } from "../../components";
import { wave4 } from "../../assets";

const Slider = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentImagesIndex, setCurrentImagesIndex] = useState(0);
  const { isRtl, currentLanguage } = useLanguage();
  const handleNextText = () => {
    setCurrentTextIndex(
      (prevTextIndex) => (prevTextIndex + 1) % SliderTextAboutus.length
    );
    setCurrentImagesIndex(
      (prevImageIndex) => (prevImageIndex + 1) % SliderImagesAboutus.length
    );
  };
  return (
    <div className="mt-28 md:mt-0 pb-5 md:px-10 px-5 relative">
      <div
        className={`md:max-w-[800px] md:w-auto md:h-[400px] pb-10 md:pb-0 text-center lg:scale-100 md:scale-90
                  md:text-start flex md:flex-row flex-col items-center mx-auto rounded-3xl relative transition-all shadow-xl slider-container
                  ${isRtl ? "h-[500px]" : "h-[550px]"}`}
      >
        {SliderImagesAboutus.map((item, index) => {
          if (index === currentImagesIndex) {
            return (
              <div key={index} className="md:w-[350px] w-[85%] md:h-[350px] h-[300px]">
                <img
                  src={item.image}
                  className={`w-full h-full object-cover rounded-xl relative -top-[100px] md:top-0  ${
                    isRtl ? "md:-right-[80px]" : "md:-left-[80px]"
                  } shadow-xl keyframeSliderImage`}
                  alt={`Slider Image ${index}`}
                />
              </div>
            );
          } else {
            return null;
          }
        })}
        <div
          className={`md:w-[60%] w-full h-[280px] relative py-5 flex md:flex-row flex-col ${
            isRtl ? " md:left-10" : " md:right-10"
          } -top-28 md:top-0 `}
        >
          {/* dots */}
          <div
            className={`h-full flex md:flex-col flex-row p-4 items-center justify-center mb-12 md:mb-0 ${
              isRtl ? "flex-row-reverse" : ""
            }`}
          >
            {SliderTextAboutus.map((_, index) => (
              <span
                key={index}
                className={`w-2 h-2 rounded-full md:my-1 mx-1 cursor-pointer transition-all ${
                  index === currentTextIndex
                    ? "bg-primary md:h-4 md:w-2 w-4 "
                    : "bg-gray-400"
                }`}
                onClick={() => {
                  setCurrentTextIndex(index);
                }}
              ></span>
            ))}
          </div>
          <div className="w-full">
            {SliderTextAboutus.map((item, index) => {
              if (index === currentTextIndex) {
                return (
                  <div
                    key={index}
                    className="md:w-full sm:w-[80%] md:px-0 px-4 relative -top-16 mx-auto md:top-0 keyframeSliderText"
                  >
                    <h1 className="text-3xl font-bold py-4 text-gray-600">
                      {currentLanguage[item.HeadText]}
                    </h1>
                    <p className="text-gray-600 text-[17px]">
                      {currentLanguage[item.Paragraph]}
                    </p>
                  </div>
                );
              } else {
                return null;
              }
            })}
          </div>
        </div>
        <JoinButton
          BtnText={"Next"}
          onclick={handleNextText}
          BtnStyle={
            "text-white absolute bottom-8 mr-8 left-[50%] translate-x-[-50%]"
          }
        />
      </div>
      <img
        src={wave4}
        alt="svg wave shape"
        className="absolute -bottom-[300px] right-0 h-[300px] w-full z-10"
      />
    </div>
  );
};

export default Slider;