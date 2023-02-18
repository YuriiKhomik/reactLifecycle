import React from "react";

class Counter extends React.Component {
  static defaultProps = {
    initialValue: 0,
  };

  static propTypes = {};

  state = {
    value: this.props.initialValue,
  };
  handleIncrement = () => {
    this.setState((prevState) => {
      return {
        value: prevState.value + 1,
      };
    });
  };

  handleDecrement = () => {
    this.setState((prevState) => ({ value: prevState.value - 1 }));
  };

  render() {
    return (
      <div className="Counter">
        <span className="Counter__value">{this.state.value}</span>
        <div className="Counter__controls">
          <button type="button" onClick={this.handleIncrement}>
            Increment on 1
          </button>
          <button type="button" onClick={this.handleDecrement}>
            Decrement on 1
          </button>
        </div>
      </div>
    );
  }
}

// Counter.defaultProps = {
//     initialValue: 0
// }

export default Counter;
