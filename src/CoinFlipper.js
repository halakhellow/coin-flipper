import React, { Component } from "react";
import Coin from "./Coin";
import head from "./images/head.jpg";
import tail from "./images/tail.jpg";
import "./CoinFlipper.css";

function choice(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

class CoinFlipper extends Component {
  static defaultProps = {
    coins: [
      { side: "head", src: head },
      { side: "tail", src: tail },
    ],
  };
  constructor(props) {
    super(props);
    this.state = {
      currentImg: null,
      flips: 0,
      heads: 0,
      tails: 0,
    };
    this.flipCoin = this.flipCoin.bind(this);
  }

  flipCoin() {
    let newCoin = choice(this.props.coins);
    this.setState((st) => {
      let newState = { ...st, currentImg: newCoin, flips: st.flips++ };
      newCoin.side === "head" ? newState.heads++ : newState.tails++;
      return newState;
    });
  }

  render() {
    return (
      <div className="CoinFlipper">
        <h1>Let's flip a coin !</h1>
        {this.state.currentImg && <Coin {...this.state.currentImg} />}
        <button onClick={this.flipCoin}>FLIP COIN</button>
        <p>{`Out of ${this.state.flips} flips , there've been ${this.state.heads} heads & ${this.state.tails} tails`}</p>
      </div>
    );
  }
}

export default CoinFlipper;
