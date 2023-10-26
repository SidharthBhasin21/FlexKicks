import React from "react";

const Button = ({
  label,
  iconUrl,
  textColor,
  backgroundColor,
  borderColor,
}) => {
  return (
    <button
      className={`flex justify-center items-center px-7 py-4  ${
        backgroundColor
          ? `${backgroundColor} ${borderColor} ${textColor}`
          : `bg-coral-red text-white border-coral-red`
      }  border font-montserrat text-lg leading-none  rounded-full`}
    >
      {" "}
      {label}{" "}
      {iconUrl && (
        <img
          src={iconUrl}
          alt="ArrowButtonIcon"
          className="ml-2 rounded-full w-5 h-5"
        />
      )}
    </button>
  );
};

export default Button;
