// import { Component } from "react";

// class Filter extends Component {
//   render() {
//     return (
// <label>
//   Filter by name{" "}
//   <input
//     type="text"
//     value={this.state.filter}
//     onChange={this.props.changeFilter}
//   ></input>
// </label>
//     );
//   }
// }

const Filter = ({ value, onChange }) => {
  return (
    <label>
      Filter by name{" "}
      <input type="text" value={value} onChange={onChange}></input>
    </label>
  );
};

export default Filter;
