import Counter from "./Components/Counter";
import Dropdown from "./Components/Dropdown";
import ColorPicker from "./Components/Colorpicker";
import colorPickerOptions from "./Components/Colorpicker/colorPickerOptions";

export const App = () => {
  return (
    <>
      <Counter initialValue={0} />
      <Dropdown />
      <ColorPicker options={colorPickerOptions} />
    </>
  );
};
