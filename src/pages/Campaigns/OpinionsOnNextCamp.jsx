import React, { useState } from "react";
import TextAarea from "../../components/TextAarea";
import { useLanguage } from "../../context/LanguageContext";
import { JoinButton } from "../../components";
import Input from "../../components/Input";

const OpinionsOnNextCamp = () => {
  const { currentLanguage } = useLanguage();
  const [formData, setFormData] = useState({
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", formData.email);
    console.log("Message:", formData.message);
    setFormData({ email: "", message: "" });
  };

  return (
    <section>
      <div className="w-[90%] sm:w-fit mx-auto flex flex-col items-center justify-center my-5 relative">
        <h1 className="shadow-2 h-full text-[1.55rem] font-bold text-[#284F3C] mb-5 p-1">
          {currentLanguage.nextCampaignToBe}
        </h1>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col w-full sm:w-fit z-10"
        >
          <Input
            label={currentLanguage.EmailAddress}
            type={"email"}
            name={"email"}
            value={formData.email}
            placeholder={currentLanguage.SignUpEmailSectionInputPlaceHolder}
            onChangeFunction={handleInputChange}
          />
          <TextAarea
            label={currentLanguage.yourMessage}
            name={"message"}
            value={formData.message}
            onChangeFunction={handleInputChange}
            placeholder={currentLanguage.textAreaPlaceHolder}
            addStyle={"text-whtie"}
          />
          <div className="flex justify-center">
            <JoinButton
              type={"submit"}
              BtnStyle={"text-white font-semibold my-5"}
              BtnText={"Submit"}
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default OpinionsOnNextCamp;
