import React from "react";

const TextAarea = ({
  label,
  name,
  value,
  onChangeFunction,
  placeholder,
  lableColor
}) => {
  return (
    <div className="flex flex-col text-gray-700">
      <label className={`py-1 font-semibold ${lableColor}`}>&nbsp;{label}</label>
      <textarea
        className="max-w-[800px] sm:w-[300px] py-2 px-4 bg-slate-100 rounded-md shadow-md border focus:border-primary outline-none"
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChangeFunction}
        rows="4"
        required
      ></textarea>
    </div>
  );
};

export default TextAarea;
