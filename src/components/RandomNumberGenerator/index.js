import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {generate: 0}

  onChangeGenerateButton = () => {
    const newNumber = Math.ceil(Math.random() * 100)

    this.setState({generate: newNumber})
  }

  render() {
    const {generate} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">Random Number</h1>
          <p className="description">
            Generate a random number in the range of 0 to 100
          </p>
          <button
            className="button"
            type="button"
            onClick={this.onChangeGenerateButton}
          >
            Generate
          </button>
          <p className="countNumber">{generate}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
