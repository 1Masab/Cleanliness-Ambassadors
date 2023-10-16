import React from "react";
import { Resource1, Resource2 } from "../../assets";
import { useLanguage } from "../../context/LanguageContext";
import { SectionsTitle } from "../../components";

const Resources = () => {
  const { currentLanguage, isRtl } = useLanguage();

  return (
    <div className={`sm:px-16 px-6`}>
      <SectionsTitle
        title={currentLanguage.ResourcesTitle}
        subTitle={currentLanguage.ResourcesSubTitle}
        AddStyle={"justify-center flex-col mb-5"}
      />
      <div className="flex flex-col md:flex-row gap-20 w-fit mx-auto">
        <div className="flex flex-col lg:flex-row min-w-[300px] max-w-[450px]  bg-primary rounded-xl text-white lg:h-fit overflow-hidden relative shadow-1 border border-primary">
          <div className="h-[200px] w-full lg:w-[300px]">
            <img
              src={Resource1}
              className="object-cover object-top h-full w-full"
            />
          </div>
          <div className={`p-4 ${isRtl ? "pl-2" : "pr-2"} max-w-[700px]`}>
            <p>{currentLanguage.Resources1}</p>
            <p className="lg:absolute mt-8 lg:mt-0 bottom-5">
              {currentLanguage.DownloadLink} :{" "}
              <a
                className="text-yellow-300 underline cursor-pointer"
                href="https://criticalhits.com.br/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2022/04/anya-768x433.jpg.webp"
                target="_blank"
              >
                {currentLanguage["click here"]}
              </a>
            </p>
          </div>
        </div>
        <div className="flex lg:flex-row flex-col min-w-[300px] max-w-[450px]  bg-primary rounded-xl text-white lg:h-fit overflow-hidden relative shadow-1 border border-primary">
          <div className="h-[200px] w-full lg:w-[300px]">
            <img
              src={Resource2}
              className="object-cover object-top h-full w-full"
            />
          </div>
          <div className={`p-4 ${isRtl ? "pl-2" : "pr-2"} max-w-[700px]`}>
            <p>{currentLanguage.Resources2}</p>
            <p className="lg:absolute mt-8 lg:mt-0 bottom-5">
              {currentLanguage.DownloadLink} :{" "}
              <a
                className="text-yellow-300 underline cursor-pointer"
                href="https://depor.com/resizer/dryg1S_PK3AsG4fPzqJq_zcxUyU=/580x330/smart/filters:format(jpeg):quality(90)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/Y2HWKYO42FESHH5XLC75ULRSXM.jpg"
                target="_blank"
              >
                {currentLanguage["click here"]}
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;
