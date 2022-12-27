import React from "react";
import "./styles.css";

const Input = (props) => {
  return (
    <div className="input-box">
      <input
        className="input"
        type={props.type}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        required
      />
      <span>{props.span}</span>
      <i></i>
    </div>
  );
};

export default Input;
