// import Counter from "./Components/Counter/Counter";
// import Dropdown from "./Components/Dropdown/Dropdown";
import ColorPicker from "./Components/Colorpicker/Colorpicker";
import colorPickerOptions from "./Components/Colorpicker/colorPickerOptions";

export const App = () => {
  return (
    <>
      {/* <Counter initialValue={0} /> */}
      {/* <Dropdown /> */}
      <ColorPicker options={colorPickerOptions} />
    </>
  );
};
