// import Counter from "./Components/Counter";
// import Dropdown from "./Components/Dropdown";
// import ColorPicker from "./Components/Colorpicker";
// import colorPickerOptions from "./Components/Colorpicker/colorPickerOptions";
import { Component } from "react";
// import TodoList from "./Components/TodoList";
import initialTodos from "./Components/TodoList/todos.json";

class App extends Component {
  state = {
    todos: initialTodos,
    name: "",
    secondName: "",
  };

  deleteTodo = (todoId) => {
    this.setState((prevState) => ({
      todos: prevState.todos.filter((todo) => todo.id !== todoId),
    }));
  };

  handleNameChange = (e) => {
    this.setState({ name: e.currentTarget.value });
  };

  // handleSecondNameChange = (e) => {
  //   this.setState({ secondName: e.currentTarget.value });
  // };

  // handleChange = (e) => {
  //   const { name, value } = e.currentTarget;
  //   this.setState({
  //     [name]: value,
  //   });
  // };

  render() {
    return (
      <>
        <form>
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
        </form>
      </>
    );
    // const { todos } = this.state;
    // // const completedTodos = todos.filter((todo) => todo.completed);
    // const totatTodosCount = todos.length;
    // const completedTodosCount = todos.reduce(
    //   (acc, todo) => (todo.completed ? acc + 1 : acc),
    //   0
    // );
    // return (
    //   <>
    //     <div>
    //       <p>Total number of todo: {totatTodosCount}</p>
    //       <p>Total of completed: {completedTodosCount}</p>
    //     </div>

    //     <TodoList todos={todos} onDeleteTodo={this.deleteTodo} />
    //   </>
    // );
  }
}

export default App;

// export class App extends Component {
// state = {
//   todos: [
//     { id: "id-1", text: "Todo-1", completed: false },
//     { id: "id-2", text: "Todo-2", completed: false },
//     { id: "id-3", text: "Todo-3", completed: true },
//     { id: "id-4", text: "Todo-4", completed: false },
//   ],
// };

//   deleteTodo = (todoId) => {
//     this.setState((prevState) => ({
//       todos: prevState.todos.filter((todo) => todo.id !== todoId),
//     }));
//   };

//   render() {
//     const { todos } = this.state;

//     // const completedTodos = todos.filter((todo) => todo.completed);
//     const completedTodos = todos.reduce(
//       (acc, todo) => (todo.completed ? acc + 1 : acc),
//       0
//     );
//     return (
//       <>
//         {/* <Counter initialValue={0} />
//         <Dropdown />
//         <ColorPicker options={colorPickerOptions} /> */}

// <div>
//   <p>Total number of todo: {todos.length}</p>
//   <p>Total of completed: {completedTodos}</p>
// </div>

//         <TodoList todos={todos} onDeleteTodo={this.deleteTodo} />
//       </>
//     );
//   }
// }

// export const App = () => {
// return (
//   <>
//     {/* <Counter initialValue={0} />
// <Dropdown />
// <ColorPicker options={colorPickerOptions} /> */}
//     <TodoList />
//   </>
// );
// };
