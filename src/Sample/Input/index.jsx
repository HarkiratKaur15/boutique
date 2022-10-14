import React from "react";

const Input = ({
  type,
  value,
  id,
  name,
  placeholder,
  onChange,
  onClick,
  className,
}) => {
  return (
    <div className="flex relative ">
      <input
        type={type}
        value={value}
        id={id}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        onClick={onClick}
        className={"bg-[#365150] border-b pb-2 pt-5 "}
      />
    </div>
  );
};

export default Input;
