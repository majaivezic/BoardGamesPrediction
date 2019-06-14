import React from "react";
import "./InputField.css";

class InputField extends React.Component {
  render() {
    const { text, name, onChange, type } = this.props;
    return (
      <div>
        <span> {text} </span>
        <input type={type} className="inputFields" placeholder={text} name={name} onChange={onChange} required/>
      </div>
    )
  }
}

export default InputField;
