import { styles } from "../../styles";
import { swipeUpIcon } from "../../assets";
import JoinButton from "../../components/JoinButton";
import { useLanguage } from "../../context/LanguageContext";
// this is the landing Section {هذا القسم الاول صفحة البداية او الهيرو }
const LandingHome = () => {
  const { language, currentLanguage } = useLanguage();

  return (
    <div
      className={`flex justify-center h-full items-center max-w-[90rem] mx-auto relative ${styles.paddingLandingPage} HeroSection`}
    >
      <div className="flex flex-col gap-2 justify-center items-center text-center w-full md:w-[60%] z-10 relative text-white HeroText">
        <h3>{currentLanguage.SofraAlnathafa}</h3>
        <h1
          className={`w-[90%] ${
            language === "KR"
              ? "lg:text-[40px] sm:text-[35px] text-[26px] lg:leading-[50px]"
              : ""
          } ${styles.heroHeadText} HeroGradientText`}
        >
          {currentLanguage.HeroHeaderText}
        </h1>
        <h3 className="text-md font-[500]">{currentLanguage.HeroSubText}</h3>
        <p className="text-white md:text-xl text-[17px] leading-[25px] mb-4 font-semibold">
          {currentLanguage.HeroPtagText}
        </p>
        <JoinButton
          BtnStyle={"bg-white text-primary hover:bg-primary hover:text-white"}
          BtnText={"JoinUSButton"}
        />
      </div>

      <a
        href="#aboutUs"
        className="w-10 h-10 p-2 absolute bottom-8 sm:bottom-20 right-[50%] -translate-x-[-50%] hidden md:flex cursor-pointer z-30"
      >
        <img
          src={swipeUpIcon}
          alt="scrull up icon"
          className="h-full absolute scrollUpAnimation"
        />
      </a>
    </div>
  );
};

export default LandingHome;
