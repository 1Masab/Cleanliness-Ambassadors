import React from "react";
import { useLanguage } from "../context/LanguageContext";
const CitySelector = ({value,onChange}) => {
  const { currentLanguage } = useLanguage();

  return (
    <select
      id="city"
      className="flex px-2 rounded-lg shadow-md h-10 bg-slate-100 w-full sm:max-w-[640px] cursor-pointer"
      value={value}
      onChange={onChange}
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
  );
};

export default CitySelector;
