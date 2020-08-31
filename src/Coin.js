import React, { Component } from "react";
import "./Coin.css";

class Coin extends Component {
  render() {
    return <img className="Coin" src={this.props.src} alt={this.props.side} />;
  }
}

export default Coin;
