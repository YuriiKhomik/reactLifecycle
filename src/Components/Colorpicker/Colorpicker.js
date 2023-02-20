import React, { Component } from "react";
import "./ColorPicker.css";

class ColorPicker extends Component {
  state = {
    activeOptionIdx: 4,
  };
  setActiveIdx = (index) => {
    this.setState({
      activeOptionIdx: index,
    });
  };
  makeOptionClassName = (index) => {
    const optionClasses = ["ColorPicker__option"];

    if (index === this.state.activeOptionIdx) {
      optionClasses.push("ColorPicker__option--active");
    }
    return optionClasses.join(" ");
  };
  render() {
    const activeOption = this.props.options[this.state.activeOptionIdx];
    return (
      <div className="ColorPicker">
        <h2 className="ColorPicker__title">Color Picker</h2>
        <p>Chosen color: {activeOption.label}</p>
        <div>
          {this.props.options.map(({ label, color }, index) => {
            return (
              <button
                key={label}
                className={this.makeOptionClassName(index)}
                style={{
                  backgroundColor: color,
                }}
                onClick={() => this.setActiveIdx(index)}
              ></button>
            );
          })}
        </div>
      </div>
    );
  }
}

// class ColorPicker extends Component {
//   state = {
//     activeOptionIdx: 1,
//   };

//   makeOptionClassName = (index) => {
//     const optionClasses = ["ColorPicker__option"];

//     if (index === this.state.activeOptionIdx) {
//       optionClasses.push("ColorPicker__option--active");
//     }

//     return optionClasses.join(" ");
//   };

//   setActiveIdx = (index) => {
//     this.setState({ activeOptionIdx: index });
//   };

//   render() {
//     const { label } = this.props.options[this.state.activeOptionIdx];
//     return (
//       <div className="ColorPicker">
//         <h2 className="ColorPicker__title">Color Picker</h2>
//         <p>chosen color: {label}</p>
//         <div>
//           {this.props.options.map(({ label, color }, index) => (
//             <button
//               key={label}
//               className={this.makeOptionClassName(index)}
//               style={{
//                 backgroundColor: color,
//               }}
//               onClick={() => this.setActiveIdx(index)}
//             ></button>
//           ))}
//         </div>
//       </div>
//     );
//   }
// }

// const ColorPicker = ({ options }) => (
//   <div className="ColorPicker">
//     <h2 className="ColorPicker__title">Color Picker</h2>
//     <div>
//       {options.map(({ label, color }) => (
//         <span
//           key={label}
//           className="ColorPicker__option"
//           style={{ backgroundColor: color }}
//         ></span>
//       ))}
//     </div>
//   </div>
// );

export default ColorPicker;
