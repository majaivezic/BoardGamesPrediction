import React from "react";
import BoardGamesDisplayPresenter from "../BoardGamesDisplayPresenter/BoardGamesDisplayPresenter.jsx";
import getPrediction from "../../api/api.js";

class BoardGamesDisplayContainer extends React.Component {
  constructor(props){
  super(props);
  this.state= {
    yearpublished: "",
    minplayers: "",
    maxplayers: "",
    playingtime: "",
    minplaytime: "",
    maxplaytime: "",
    minage: "",
    usersrated: "",
    totalowners: "",
    totaltraders: "",
    totalwanters: "",
    totalwishers: "",
    totalcomments: "",
    totalweights: "",
    averageweight: "",
    result: "",
  }
}

 handleInput = (event) => {
   this.setState({
     [event.target.name]: event.target.value
   })
 }

handleSubmit = () => {
  const data = {
          "Inputs": {
                  "input1":
                  [
                      {
                              'yearpublished': this.state.yearpublished,
                              'minplayers': this.state.minplayers,
                              'maxplayers': this.state.maxplayers,
                              'playingtime': this.state.playingtime,
                              'minplaytime': this.state.minplaytime,
                              'maxplaytime': this.state.maxplaytime,
                              'minage': this.state.minage,
                              'users_rated': this.state.usersrated,
                              'total_owners': this.state.totalowners,
                              'total_traders': this.state.totaltraders,
                              'total_wanters': this.state.totalwanters,
                              'total_wishers': this.state.totalwishers,
                              'total_comments': this.state.totalcomments,
                              'total_weights': this.state.totalweights,
                              'average_weight': this.state.averageweight,
                      }
                  ],
          },
      "GlobalParameters":  {
      }
  };
  getPrediction(data).then((res) => {
    this.setState({
      result: parseFloat(Object.values(res.data.Results.output1[0])[0]).toFixed(2),
    })
  });
}
  render() {
    return (
      <div>
        <BoardGamesDisplayPresenter
        handleInput={this.handleInput}
        handleSubmit={this.handleSubmit}
        result={this.state.result < 0 || this.state.result > 10 || this.state.result === null ? "undefined" : this.state.result}
         />
      </div>
    )
  }
}

export default BoardGamesDisplayContainer;
