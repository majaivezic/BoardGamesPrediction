import React from "react";
import "./ResultField.css"

class ResultField extends React.Component {
  render() {
    const { result } = this.props;
    return(
      <div className="resultFieldContainer">
        <span className="resultFieldText"> predicted result : {result} </span>
      </div>
    )
  }
}

export default ResultField;
