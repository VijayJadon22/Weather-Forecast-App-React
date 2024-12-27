import React from "react";

const Input = (props) => {
  return (
    <input
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
      type="text"
      className="input-field"
    />
  );
};

export default Input;
