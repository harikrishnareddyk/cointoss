import {Component} from 'react'

class CoinToss extends Component {
  state = {coin: true, heads: 0, tails: 0}

  toss = () => {
    const toss1 = Math.ceil(Math.random() * 2) - 1
    console.log(toss1)
    if (toss1 === 0) {
      this.setState({coin: true})
      this.setState(prevState => ({heads: prevState.heads + 1}))
    } else {
      this.setState({coin: false})
      this.setState(prevState => ({tails: prevState.tails + 1}))
    }
  }

  render() {
    const {coin, heads, tails} = this.state
    const total = tails + heads
    return (
      <div>
        <h1>Coin Toss Game</h1>
        <p>Heads (or) Tails</p>
        {coin ? (
          <img
            src="https://assets.ccbp.in/frontend/react-js/heads-img.png"
            alt="toss result"
          />
        ) : (
          <img
            src="https://assets.ccbp.in/frontend/react-js/tails-img.png"
            alt="toss result"
          />
        )}
        <button onClick={this.toss} type="button">
          Toss Coin
        </button>
        <p> total:{total}</p>
        <p> Heads:{heads}</p>
        <p>tails:{tails}</p>
      </div>
    )
  }
}

export default CoinToss
