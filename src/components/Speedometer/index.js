// Write your code here

import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  accelerate = () => {
    const {speed} = this.state

    if (speed < 200) {
      this.setState(prevState => ({speed: prevState.speed + 10}))
    }
  }

  applyBrake = () => {
    const {speed} = this.state

    if (speed > 0) {
      this.setState(prevState => ({speed: prevState.speed - 10}))
    }
  }

  render() {
    const {speed} = this.state
    return (
      <div className="app-container">
        <h1 className="heading"> SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
          className="speedometer"
        />
        <h1 className="description">Speed is {speed}mph</h1>
        <p className="limitValue">Min Limit is 0mph, Max Limit is 200mph</p>
        <div className="button-container">
          <button
            type="button"
            className="Accelerate"
            onClick={this.accelerate}
          >
            Accelerate
          </button>
          <button
            type="button"
            className="applyBrake"
            onClick={this.applyBrake}
          >
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
