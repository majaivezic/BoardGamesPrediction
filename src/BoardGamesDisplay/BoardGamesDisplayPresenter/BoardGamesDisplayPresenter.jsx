import React from "react";
import InputField from "./InputField/InputField.jsx";
import ResultField from "./ResultField/ResultField.jsx";
import "./BoardGamesDisplayPresenter.css";

class BoardGamesDisplayPresenter extends React.Component {
  render() {
    const { handleInput, handleSubmit, result } = this.props;
    return(
      <div align="center">
        <span className="title"> Board Games Rating Prediction </span>
        <div className="grid-container">
          <InputField type="number" text="year published" name="yearpublished" onChange={handleInput}/>
          <InputField type="number" text="min. players" name="minplayers" onChange={handleInput}/>
          <InputField type="number" text="max. players" name="maxplayers" onChange={handleInput} />
          <InputField type="number" text="playing time" name="playingtime" onChange={handleInput} />
          <InputField type="number" text="min. playtime" name="minplaytime" onChange={handleInput} />
          <InputField type="number" text="max. playtime" name="maxplaytime" onChange={handleInput} />
          <InputField type="number" text="min. age" name="minage" onChange={handleInput} />
          <InputField type="number" text="users rated" name="usersrated" onChange={handleInput} />
          <InputField type="number" text="total owners" name="totalowners" onChange={handleInput} />
          <InputField type="number" text="total traders" name="totaltraders" onChange={handleInput} />
          <InputField type="number" text="total wanters" name="totalwanters" onChange={handleInput} />
          <InputField type="number" text="total wishers" name="totalwishers" onChange={handleInput} />
          <InputField type="number" text="total comments" name="totalcomments" onChange={handleInput} />
          <InputField type="number" text="total weights" name="totalweights" onChange={handleInput} />
          <InputField text="average weight" name="averageweight" onChange={handleInput} />
        </div>
        <button className="submitButton" type="submit" onClick={handleSubmit}> SUBMIT </button>
        <ResultField result={result} />
      </div>
    )
  }
}

export default BoardGamesDisplayPresenter;
