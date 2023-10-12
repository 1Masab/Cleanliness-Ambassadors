import { useState } from "react";
import { playButton, QuestionMark } from "../../assets";
const VideoPopUp = () => {
  const [isPopupVisible, setPopupVisible] = useState(false);

  const openPopup = () => {
    setPopupVisible(true);
  };

  const closePopup = () => {
    setPopupVisible(false);
  };

  return (
    <div className="relative z-50 max-w-[600px] aspect-video p-2 border-white border rounded-xl">
      <button
        onClick={openPopup}
        className="relative w-full h-full flex items-center justify-center rounded-lg bg-gray-200 hover:scale-[0.98] transition-all overflow-hidden thumbnailAboutUs"
      >
        {/* thumbnail image */}
        <img
          src={QuestionMark}
          alt="Video Thumbnail"
          className="w-full h-full object-cover opacity-90"
        />
        {/* Play button */}
        {/* <div className="absolute top-[50%] -translate-y-[50%] left-[50%] -translate-X-[50%]"> */}
          <img src={playButton} alt="play button icon" className="absolute" />
        {/* </div> */}
      </button>

      {/* Video popup */}
      {isPopupVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-[70] top-10">
          <div className="relative aspect-video w-full md:w-[80%] xl:w-[70%]">
            {/* Video iframe */}
            <iframe
              src={
                "https://www.youtube.com/embed/opWvTOVqay8?rel=0&amp;autoplay=1"
              }
              title="YouTube Video"
              className="absolute inset-0 w-full h-full rounded-md"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          {/* Close button */}
          <button
            onClick={closePopup}
            className="absolute top-8 right-2 text-white text-6xl"
          >
            &times;
          </button>
        </div>
      )}
    </div>
  );
};

export default VideoPopUp;
