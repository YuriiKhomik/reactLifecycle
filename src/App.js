// import Counter from "./Components/Counter";
// import Dropdown from "./Components/Dropdown";
// import ColorPicker from "./Components/Colorpicker";
// import colorPickerOptions from "./Components/Colorpicker/colorPickerOptions";
import { Component } from "react";
import TodoList from "./Components/TodoList";

export class App extends Component {
  state = {
    todos: [
      { id: "id-1", text: "Todo-1", completed: false },
      { id: "id-2", text: "Todo-2", completed: false },
      { id: "id-3", text: "Todo-3", completed: false },
      { id: "id-4", text: "Todo-4", completed: false },
    ],
  };

  deleteTodo(todoId) {}

  render() {
    const { todos } = this.state;
    return (
      <>
        {/* <Counter initialValue={0} />
        <Dropdown />
        <ColorPicker options={colorPickerOptions} /> */}
        <TodoList todos={todos} />
      </>
    );
  }
}

// export const App = () => {
//   return (
// <>
//   {/* <Counter initialValue={0} />
//   <Dropdown />
//   <ColorPicker options={colorPickerOptions} /> */}
//   <TodoList />
// </>
//   );
// };
