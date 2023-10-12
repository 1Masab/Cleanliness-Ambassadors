import React, { useState } from "react";
import { styles } from "../../styles";
import { useLanguage } from "../../context/LanguageContext";
import Input from "../../components/Input";
import CitySelector from "../../components/CitySelector";
import { JoinButton } from "../../components";
const Donate = () => {
  const { currentLanguage, isRtl } = useLanguage();
  const [customAmountPopupOpen, setCustomAmountPopupOpen] = useState(false); // State for the popup

  const [formData, setFormData] = useState({
    donationAmoun: "10",
    donationFrequency: "One time",
    Firstname: "",
    Lastname: "",
    city: "",
    phoneNumber: "",
    email: "",
    cardholderName: "",
    CCN: "",
    Exp: "",
    CVC: "",
  });
  const inputsErrorMessages = {
    Firstname: currentLanguage.InputErrorMessages.Name,
    email: currentLanguage.InputErrorMessages.email,
    Exp: currentLanguage.InputErrorMessages.Exp,
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Automatically inserting the slash "/" after the user types the MM or month
    if (name === "Exp" && value.length === 2 && value.indexOf("/") === -1) {
      setFormData({ ...formData, [name]: value + "/" });
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Firstname:", formData.Firstname);
    console.log("Lastname:", formData.Lastname);
    console.log("Phone number:", formData.phoneNumber);
    console.log("City :", formData.city);
    console.log("Email :", formData.email);
    console.log("card Holder Name :", formData.cardholderName);
    console.log("CCN :", formData.CCN);
    console.log("Email :", formData.Exp);
    console.log("CVC :", formData.CVC);
  };
  const priceItems = [
    { price: "10" },
    { price: "20" },
    { price: "30" },
    { price: "40" },
    { price: "50" },
  ];
  const InputsInfo = [
    {
      label: currentLanguage.DonationFormPage.firstNameLable,
      type: "text",
      name: "Firstname",
      value: formData.Firstname,
      onChangeFunction: handleInputChange,
      placeholder: currentLanguage.DonationFormPage.firstNamePlaceHolder,
      errorMessage: inputsErrorMessages.Firstname,
      required: "required",
    },
    {
      label: currentLanguage.DonationFormPage.lastNameLable,
      type: "text",
      name: "Lastname",
      value: formData.Lastname,
      onChangeFunction: handleInputChange,
      placeholder: currentLanguage.DonationFormPage.lastNamePlaceHolder,
    },
    {
      label: currentLanguage.DonationFormPage.creditHolderNameLable,
      type: "text",
      name: "cardholderName",
      value: formData.cardholderName,
      onChangeFunction: handleInputChange,
      placeholder: currentLanguage.DonationFormPage.creditHolderNamePlaceHolder,
      required: "required",
    },
    {
      label: currentLanguage.DonationFormPage.creditCardNumberLable,
      type: "text",
      name: "CCN",
      value: formData.CCN,
      onChangeFunction: handleInputChange,
      placeholder: currentLanguage.DonationFormPage.creditCardNumberPlaceHolder,
      required: "required",
    },
    {
      label: currentLanguage.DonationFormPage.expirationLable,
      type: "text",
      name: "Exp",
      value: formData.Exp,
      onChangeFunction: handleInputChange,
      placeholder: currentLanguage.DonationFormPage.expirationPlaceHolder,
      pattern: "^(0[1-9]|1[0-2])/(2[3-9]|3[0-9]|4[0-9]|5[0-9])$",
      errorMessage: inputsErrorMessages.Exp,
      required: "required",
    },
    {
      label: currentLanguage.DonationFormPage.securityCodeLable,
      type: "text",
      name: "CVC",
      value: formData.CVC,
      onChangeFunction: handleInputChange,
      placeholder: "CVC",
      additionalattributes: { maxLength: "4" },
      required: "required",
    },
  ];

  return (
    <section>
      <div
        className={`${styles.padding} max-w-3xl mx-auto mt-[70px] select-none text-gray-700`}
      >
        <h1 className="w-fit my-6 text-2xl font-bold">
          {currentLanguage.DonationFormPage.firstTitle}
        </h1>
        <div className="flex flex-col gap-10 max-w-[640px] w-full">
          <div className="flex flex-wrap gap-2">
            {priceItems.map((item) => (
              <PriceItems
                key={item.price}
                price={item.price}
                isSelected={formData.donationAmoun === item.price}
                Select={(price) => {
                  setFormData({ ...formData, donationAmoun: price });
                }}
              />
            ))}
            <div
              className={`text-primary shrink-0 px-5 h-16 border flex items-center justify-center cursor-pointer shadow-md hover:bg-[#548B68] hover:text-white rounded-xl transition-all ${
                formData.donationAmoun === ""
                  ? "bg-[#548B68] text-white"
                  : "bg-slate-100"
              }`}
              onClick={() => {
                setCustomAmountPopupOpen(true);
                setFormData({ ...formData, donationAmoun: "" });
              }}
            >
              <h1 className="text-lg font-semibold">
                {currentLanguage.DonationFormPage.customDonation}
              </h1>
            </div>
          </div>
          <div>
            <h1 className="w-fit mb-5 text-2xl font-bold">
              {currentLanguage.DonationFormPage.secondTitle}
            </h1>
            <div className="flex flex-col sm:flex-row gap-x-10 gap-y-4">
              <DonationFrequency
                DonationFrequency={
                  currentLanguage.DonationFormPage.donationFrequencyOneTime
                }
                value="One time"
                isSelected={formData.donationFrequency === "One time"}
                Select={(value) =>
                  setFormData({ ...formData, donationFrequency: value })
                }
              />
              <DonationFrequency
                DonationFrequency={
                  currentLanguage.DonationFormPage.donationFrequencyMonthly
                }
                value="Monthly"
                isSelected={formData.donationFrequency === "Monthly"}
                Select={(value) =>
                  setFormData({ ...formData, donationFrequency: value })
                }
              />
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <h1 className="w-fit my-6 text-2xl font-bold">
            {currentLanguage.DonationFormPage.thirdTitle}
          </h1>
          <div className="flex gap-x-10 sm:flex-row flex-col">
            {InputsInfo.slice(0, 2).map((item, index) => (
              <Input key={index} {...item} inputStyle="" />
            ))}
          </div>
          <div>
            <CitySelector value={formData.city} onChange={handleInputChange} />
          </div>
          <div>
            <Input
              label={currentLanguage.DonationFormPage.EmailLable}
              type="email"
              name="email"
              value={formData.email}
              onChangeFunction={handleInputChange}
              placeholder={currentLanguage.DonationFormPage.emailPlaceHolder}
              inputStyle="sm:w-full sm:max-w-[640px] mt-3"
              errorMessage={inputsErrorMessages.email}
              required
            />
          </div>
          <h1 className="w-fit my-6 text-2xl font-bold">
            {currentLanguage.DonationFormPage.fourthTitle}
          </h1>
          <div className="flex gap-x-10 sm:flex-row flex-col">
            {InputsInfo.slice(2, 4).map((item, index) => (
              <Input key={index} {...item} />
            ))}
          </div>
          <div className="flex gap-x-10 sm:flex-row flex-col">
            {InputsInfo.slice(4, 6).map((item, index) => (
              <Input key={index} {...item} />
            ))}
          </div>
          <h1 className="sm:max-w-xl my-6 text-2xl font-bold">
            {currentLanguage.DonationFormPage.fifthTitle}{" "}
            {formData.donationAmoun}${" "}
            {formData.donationFrequency === "One time"
              ? currentLanguage.DonationFormPage.donationFrequencyOneTime
              : currentLanguage.DonationFormPage.donationFrequencyMonthly}
          </h1>
          <div>
            <JoinButton
              type="submit"
              BtnText="processPayment"
              BtnStyle="text-white font-bold"
            />
          </div>
        </form>
      </div>
      {customAmountPopupOpen && (
        <div className="absolute w-full h-screen inset-0 flex justify-center items-center bg-[#00000056]">
          <div className="w-fit p-10 bg-[#f7f7f7] rounded-xl">
            <h2 className="w-fit mb-5 text-2xl font-bold">
              {currentLanguage.DonationFormPage.popUpTitle}
            </h2>
            <div className="relative">
              <span
                className={`absolute ${
                  isRtl ? "right-[0.3rem]" : "left-[0.4rem]"
                } top-4 text-primary font-semibold text-md z-50`}
              >
                $
              </span>
              <Input
                type="text"
                name="donationAmoun"
                value={formData.donationAmoun}
                onChangeFunction={handleInputChange}
                placeholder={currentLanguage.DonationFormPage.enterAmount}
              />
            </div>
            <div className="flex gap-5">
              <button
                className="bg-primary text-white font-bold px-5 py-1 rounded-xl hover:shadow-md transition-all"
                onClick={() => setCustomAmountPopupOpen(false)}
              >
                {currentLanguage.confirm}
              </button>
              <button
                className="font-semibold text-lg border hover:shadow-md text-gray-600 bg-green-50 bg-opacity-40 px-5 py-1 rounded-xl transition-all"
                onClick={() => setCustomAmountPopupOpen(false)}
              >
                {currentLanguage.cancel}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Donate;
const PriceItems = ({ price, isSelected, Select }) => {
  const itemStyle = isSelected
    ? "text-white bg-[#548B68]"
    : "bg-slate-100 hover:bg-[#548B68] hover:text-white";

  return (
    <div
      className={`w-[22.5%] px-5 h-16 flex items-center justify-center border cursor-pointer shadow-md rounded-xl transition-all ${itemStyle}`}
      onClick={() => Select(price)}
    >
      <h1 className="text-2xl font-bold">${price}</h1>
    </div>
  );
};
const DonationFrequency = ({
  DonationFrequency,
  isSelected,
  Select,
  value,
}) => {
  const itemStyle = isSelected
    ? "bg-[#548B68] text-white"
    : "bg-slate-100 hover:bg-[#548B68] hover:text-white";

  return (
    <div
      className={`h-16 w-full sm:w-1/2 shadow-md border flex items-center justify-center rounded-xl transition-all cursor-pointer ${itemStyle}`}
      onClick={() => Select(value)}
    >
      <h1 className="text-2xl font-bold">{DonationFrequency}</h1>
    </div>
  );
};
