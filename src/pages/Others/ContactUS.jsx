import React, { useState } from "react";
import { styles } from "../../styles";
import Input from "../../components/Input";
import { plant1, location, mail, telephone } from "../../assets";
import { JoinButton, SocialMediaIcons } from "../../components";
import { SocialMediaIconsContent } from "../../data/Constants";
import { useLanguage } from "../../context/LanguageContext";
import TextAarea from "../../components/TextAarea";
const ContactUS = () => {
  const { currentLanguage } = useLanguage();
  const [formData, setFormData] = useState({
    Name: "",
    email: "",
    message: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Name:", formData.Name);
    console.log("Email:", formData.email);
    console.log("Message:", formData.message);
    setFormData({ Name: "", email: "", message: "" });
  };

  return (
    <section>
      <div
        className={`relative mt-[70px] flex justify-center ${styles.padding}`}
      >
        <div className="max-w-3xl w-full sm:w-auto bg-[#08221ccc] flex flex-col sm:flex-row rounded-xl shadow-xl z-10">
          <div
            className={`sm:max-w-[350px] min-w-[260px] max-w-full pb-5 px-5 text-white rounded-xl z-10 bg-primary shadow-xl`}
          >
            <h1 className="w-fit my-8 text-4xl font-bold relative beforeTitle">
              {currentLanguage.ContactUs}
            </h1>
            <div className="flex gap-5 items-center mb-8">
              <img src={mail} className="w-5 h-5" />
              <h4 className="text-white font-thin text-lg">
                example@gmail.com
              </h4>
            </div>
            <div className="flex gap-5 items-center my-8">
              <img src={location} className="w-5 h-5" />
              <h4 className="text-white font-thin text-lg">
                Baghdad, Al-Karradah, Near Al-Firdous Square
              </h4>
            </div>
            <div className="flex gap-5 items-center my-8">
              <img src={telephone} className="w-5 h-5" />
              <h4 className="text-white font-thin text-lg" dir="ltr">
                +946 784 302 2310
              </h4>
            </div>
            <div className="flex gap-5 mt-12">
              {SocialMediaIconsContent.slice(0, 3).map((item, index) => (
                <SocialMediaIcons
                  iconName={item.iconName}
                  url={item.url}
                  icon={item.icon}
                  key={index}
                  additionalStyle={"bg-primary hover:bg-[#08221ccc]"}
                />
              ))}
            </div>
          </div>

          <div className={`sm:w-auto w-full py-10 px-5 sm:px-10`}>
            <h1 className="font-thin text-3xl text-white">
              {currentLanguage.ContactUsFormTitle}
            </h1>
            <h1 className="font-thin text-lg text-slate-100 pt-1">
              {currentLanguage.ContactUsFormSubTitle}
            </h1>
            <form className="mt-4" onSubmit={handleSubmit}>
              <Input
                label={currentLanguage.FormTranslation.labelName}
                type={"text"}
                name={"Name"}
                value={formData.Name}
                placeholder={currentLanguage.FormTranslation.placeHolderName}
                onChangeFunction={handleInputChange}
                lableColor={"text-white"}
              />
              <Input
                label={currentLanguage.EmailAddress}
                type={"email"}
                name={"email"}
                value={formData.email}
                placeholder={currentLanguage.SignUpEmailSectionInputPlaceHolder}
                onChangeFunction={handleInputChange}
                lableColor={"text-white"}
              />
              <TextAarea
                label={currentLanguage.yourMessage}
                name={"message"}
                value={formData.message}
                onChangeFunction={handleInputChange}
                placeholder={currentLanguage.textAreaPlaceHolder2}
                lableColor={"text-white"}
              />
              <div className="w-full mt-8">
                <JoinButton
                  type={"submit"}
                  BtnText={"Submit"}
                  BtnStyle={"text-white mx-auto block mt-5 sm:w-[200px]"}
                />
              </div>
            </form>
          </div>
        </div>

        <img
          src={plant1}
          className="absolute -bottom-[1px] right-0 w-[50%] lg:w-[40%]"
        />
      </div>
    </section>
  );
};

export default ContactUS;
