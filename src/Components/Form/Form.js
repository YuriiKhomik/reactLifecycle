import { Component } from "react";

class Form extends Component {
  state = {
    name: "",
    secondName: "",
    kindOfHuman: "dogLover",
    license: false,
  };
  handleChange = (e) => {
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  handleLicenseChange = (e) => {
    console.log(e.currentTarget.checked);
    this.setState({ license: e.currentTarget.checked });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: "", secondName: "" });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          name{" "}
          <input
            name="name"
            type="text"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </label>
        <label>
          second name{" "}
          <input
            name="secondName"
            type="text"
            value={this.state.secondName}
            onChange={this.handleChange}
          />
        </label>

        <p>Who are you: </p>
        <label>
          Dog lover
          <input
            type="radio"
            name="kindOfHuman"
            value="dogLover"
            onChange={this.handleChange}
            checked={this.state.kindOfHuman === "dogLover"}
          ></input>
        </label>
        <label>
          Cat lover
          <input
            type="radio"
            name="kindOfHuman"
            value="catLover"
            onChange={this.handleChange}
            checked={this.state.kindOfHuman === "catLover"}
          ></input>
        </label>
        <label>
          I have no heart
          <input
            type="radio"
            name="kindOfHuman"
            value="nooneLover"
            onChange={this.handleChange}
            checked={this.state.kindOfHuman === "nooneLover"}
          ></input>
        </label>

        <label>
          Agree with agreement
          <input
            type="checkbox"
            name="license"
            onChange={this.handleLicenseChange}
            checked={this.state.license}
          ></input>
        </label>
        <button type="submit" disabled={!this.state.license}>
          Send info
        </button>
      </form>
    );
  }
}

export default Form;
