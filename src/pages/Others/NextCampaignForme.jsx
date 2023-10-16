import React, { useState } from "react";
import { useLanguage } from "../../context/LanguageContext";
import { JoinButton, NextCampDetalis, Input } from "../../components";
import { treeInTheHand } from "../../assets";

const Banner = () => {
  return (
    <div className="w-full h-[50vh] relative mt-[66px]">
      <img
        src={treeInTheHand}
        className="absolute inset-0 w-full h-full object-cover opacity-100 z-[-1]"
      />
      <div className="w-full h-full flex items-center justify-center text-center bg-[rgba(0,0,0,0.3)] px-5">
        <div className="max-w-4xl text-white z-50">
          <NextCampDetalis />
        </div>
      </div>
    </div>
  );
};
const NextCampaignForme = () => {
  const { currentLanguage } = useLanguage();

  const [formData, setFormData] = useState({
    Name: "",
    age: "",
    phoneNumber: "",
    telgramUserName: "",
    gender: "",
    career: "",
    jobPlace: "",
    city: "",
  });
  const inputsErrorMessages = {
    Name: currentLanguage.InputErrorMessages.Name,
    PhoneNumber: currentLanguage.InputErrorMessages.PhoneNumber,
    TelegramUserName: currentLanguage.InputErrorMessages.TelegramUserName,
    email: currentLanguage.InputErrorMessages.email,
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Name:", formData.Name);
    console.log("Age:", formData.age);
    console.log("Phone number:", formData.phoneNumber);
    console.log("Telegram username:", formData.telgramUserName);
    console.log("Gender :", formData.gender);
    console.log("Career :", formData.career);
    console.log("Job place:", formData.jobPlace);
    console.log("City :", formData.city);
  };

  return (
    <section>
      <Banner />
      <div
        className={`w-fit mx-auto flex flex-col justify-center sm:pb-16 py-6 sm:px-0 px-5`}
      >
        <div className="max-w-xl">
          <h1 className="text-2xl font-bold text-gray-700">
            {currentLanguage.nextCampaignFormH1}
            <span className="text-primary">
              &nbsp;{currentLanguage.nextCampaignFormH1Span}
            </span>
          </h1>
          <p>{currentLanguage.nextCampaignFormP1}</p>
          <p className="mt-5">
            <span className="font-semibold">{currentLanguage.Note}</span>
            {currentLanguage.nextCampaignFormP2}
          </p>
        </div>
        <h1 className="text-2xl font-bold text-gray-600 my-5">
          {currentLanguage.FormTranslation.typeTheReauired}
        </h1>
        <form onSubmit={handleSubmit} className="w-full">
          <div className="flex md:gap-10 sm:gap-6 sm:flex-row flex-col">
            <Input
              label={currentLanguage.FormTranslation.labelName}
              type={"text"}
              name={"Name"}
              value={formData.Name}
              placeholder={currentLanguage.FormTranslation.placeHolderName}
              onChangeFunction={handleInputChange}
              required
              pattern={".{2,}"}
              errorMessage={inputsErrorMessages.Name}
            />
            <Input
              label={currentLanguage.FormTranslation.labelAge}
              type={"number"}
              name={"age"}
              value={formData.age}
              placeholder={currentLanguage.FormTranslation.placeHolderAge}
              onChangeFunction={handleInputChange}
              required
            />
          </div>
          <div className="flex md:gap-10 sm:gap-6 sm:flex-row flex-col">
            <Input
              label={currentLanguage.FormTranslation.labelPhoneNumber}
              type={"text"}
              name={"phoneNumber"}
              value={formData.phoneNumber}
              placeholder={"07xx-xxx-xxxx"}
              onChangeFunction={handleInputChange}
              pattern={"^07[578][0-9]{8}$"}
              errorMessage={inputsErrorMessages.PhoneNumber}
              required
            />
            <Input
              label={currentLanguage.FormTranslation.labelTelegramUsername}
              type={"text"}
              name={"telgramUserName"}
              value={formData.telgramUserName}
              placeholder={"@example"}
              onChangeFunction={handleInputChange}
              errorMessage={inputsErrorMessages.TelegramUserName}
              required
            />
          </div>
          <div className="flex md:gap-10 sm:gap-6 sm:flex-row flex-col">
            <div className="h-[72px] mt-1 max-w-[800px] sm:w-[300px]">
              <label className="font-semibold text-gray-700">
                {currentLanguage.FormTranslation.labelGender}
              </label>
              <div className="flex gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="gender"
                  id={"male"}
                  value={"male"}
                  onChange={handleInputChange}
                  checked={true}
                />
                <label htmlFor="male" className="cursor-pointer">
                  {currentLanguage.FormTranslation.optionMale}
                </label>
              </div>
              <div className="flex gap-2">
                <input
                  type="radio"
                  name="gender"
                  id={"female"}
                  value={"female"}
                  onChange={handleInputChange}
                />
                <label htmlFor="female" className="cursor-pointer">
                  {currentLanguage.FormTranslation.optionFemale}
                </label>
              </div>
            </div>
            <div>
              <label
                htmlFor="career"
                className="font-semibold text-gray-700 relative group transition-all cursor-pointer"
              >
                &nbsp;{currentLanguage.FormTranslation.labelCareer}
                <a
                  href="https://academy.bloom.pm/#"
                  target="_blank"
                  className="text-blue-600 text-lg font-extrabold"
                >
                  ?
                </a>
                :
                <p className="group-hover:block absolute bottom-8 right-0 text-md font-thin min-w-[300px] bg-slate-500 text-white rounded-xl p-1 text-center hidden">
                  {currentLanguage.CareerQuestionMarkHidden}
                </p>
              </label>
              <select
                id="career"
                className="flex px-2 rounded-lg shadow-md h-10 bg-slate-100 w-full sm:w-[300px] cursor-pointer"
                value={formData.career}
                onChange={handleInputChange}
                name="career"
              >
                <option value="" disabled>
                  {currentLanguage.FormTranslation.optionCareer}
                </option>
                <option value="Employee">
                  {currentLanguage.FormTranslation.optionEmployee}
                </option>
                <option value="student">
                  {currentLanguage.FormTranslation.optionStudent}
                </option>
                <option value="NoJob">
                  {currentLanguage.FormTranslation.optionNoJob}
                </option>
              </select>
            </div>
          </div>
          {formData.career === "Employee" && (
            <div className="">
              <Input
                type={"text"}
                name={"jobPlace"}
                value={formData.jobPlace}
                placeholder={currentLanguage.FormTranslation.labelJobPlace}
                onChangeFunction={handleInputChange}
                inputStyle={"sm:w-full"}
              />
            </div>
          )}
          <div>
            <sub>&nbsp; {currentLanguage.FormTranslation.labelCity}</sub>
            <select
              id="city"
              className="flex px-2 rounded-lg shadow-md h-10 bg-slate-100 w-full sm:max-w-[640px] cursor-pointer"
              value={formData.city}
              onChange={handleInputChange}
              name="city"
            >
              <option value={""} disabled>
                {currentLanguage.FormTranslation.optionCity}
              </option>
              <option value="baghdad">
                {currentLanguage.FormTranslation.optionBaghdad}
              </option>
              <option value="basra">
                {currentLanguage.FormTranslation.optionBasra}
              </option>
              <option value="mosul">
                {currentLanguage.FormTranslation.optionMosul}
              </option>
              <option value="erbil">
                {currentLanguage.FormTranslation.optionErbil}
              </option>
              <option value="sulaymaniyah">
                {currentLanguage.FormTranslation.optionSulaymaniyah}
              </option>
              <option value="najaf">
                {currentLanguage.FormTranslation.optionNajaf}
              </option>
              <option value="karbala">
                {currentLanguage.FormTranslation.optionKarbala}
              </option>
              <option value="kirkuk">
                {currentLanguage.FormTranslation.optionKirkuk}
              </option>
              <option value="anbar">
                {currentLanguage.FormTranslation.optionAnbar}
              </option>
              <option value="dhi_qar">
                {currentLanguage.FormTranslation.optionDhiQar}
              </option>
              <option value="babil">
                {currentLanguage.FormTranslation.optionBabil}
              </option>
            </select>
          </div>
          <div className="w-full sm:max-w-[640px]">
            <JoinButton
              type={"submit"}
              BtnText={"Submit"}
              BtnStyle={"text-white mx-auto block mt-8 sm:w-[200px]"}
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default NextCampaignForme;
