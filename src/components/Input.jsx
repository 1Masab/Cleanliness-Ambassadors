import React, { useState } from "react";

const Input = ({
  label,
  type,
  name,
  value,
  onChangeFunction,
  placeholder,
  lableColor,
  inputStyle,
  pattern,
  errorMessage,
  additionalattributes,
  required
}) => {
  const [focused, setFocused] = useState(false);
  const handleFocus = (e) => {
    setFocused(true);
  };
  return (
    <div
      className={`flex flex-col mb-5 text-gray-700 max-w-[800px] sm:w-[300px] ${inputStyle}`}
    >
      <label className={`py-1 font-semibold ${lableColor}`}>{label}</label>
      <input
        className={`w-full px-4 bg-slate-100 rounded-md shadow-md h-10 border focus:border-primary outline-none`}
        type={type}
        name={name}
        value={value}
        onChange={onChangeFunction}
        placeholder={placeholder}
        pattern={pattern}
        onBlur={handleFocus}
        focused={focused.toString()}
        {...additionalattributes}
        required={required}
      />
      <span className="errorMessageSpan">{errorMessage}</span>
    </div>
  );
};

export default Input;
