import { Component } from "react";

export default class Clock extends Component {
  state = {
    time: new Date().toLocaleTimeString(),
  };

  intervalId = null;

  componentDidMount() {
    console.log("setInterval");

    this.intervalId = setInterval(() => {
      console.log("tick");
      return this.setState({ time: new Date().toLocaleTimeString() });
    }, 1000);

    // this.intervalId = setInterval(
    //   () => this.setState({ time: new Date().toLocaleTimeString() }),
    //   1000
    // );
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    return <div className="Clock__face">{this.state.time}</div>;
  }
}
