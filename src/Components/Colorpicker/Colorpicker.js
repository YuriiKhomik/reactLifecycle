import React, { PureComponent } from "react";
import classNames from "classnames";
import "./ColorPicker.css";

class ColorPicker extends PureComponent {
  state = {
    activeOptionIdx: 3,
  };

  // shouldComponentUpdate(nextProps, nextState) {
  //   return nextState.activeOptionIdx !== this.state.activeOptionIdx;
  // }
  setActiveIdx = (index) => {
    this.setState({
      activeOptionIdx: index,
    });
  };
  makeOptionClassName = (index) => {
    // const optionClasses = ["ColorPicker__option"];
    // if (index === this.state.activeOptionIdx) {
    //   optionClasses.push("ColorPicker__option--active");
    // }
    // return optionClasses.join(" ");
    // or via classNames
    return classNames("ColorPicker__option", {
      "ColorPicker__option--active": index === this.state.activeOptionIdx,
    });
  };
  render() {
    console.log(`rerender @ ${Date.now()}`);
    const { options } = this.props;
    const { activeOptionIdx } = this.state;
    const { label } = options[activeOptionIdx];

    return (
      <div className="ColorPicker">
        <h2 className="ColorPicker__title">Color Picker</h2>
        <p>Chosen color: {label}</p>
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
