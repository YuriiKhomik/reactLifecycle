import { nanoid } from "nanoid";
import { Component } from "react";
// import Counter from "./Components/Counter";
// import Dropdown from "./Components/Dropdown";
// import ColorPicker from "./Components/Colorpicker";
// import colorPickerOptions from "./Components/Colorpicker/colorPickerOptions";
// import TodoEditor from "./Components/TodoEditor/TodoEditor";
// import TodoList from "./Components/TodoList";
import initialTodos from "./Components/TodoList/todos.json";
// import Form from "./Components/Form";
// import Filter from "./Components/Filter";
// import LoginForm from "./Components/LoginForm";
// import ProductReviewForm from "./Components/ProductReviewForm";

class App extends Component {
  state = {
    todos: initialTodos,
    filter: "",
  };

  addTodo = (message) => {
    const todo = {
      id: nanoid(),
      text: message,
      completed: false,
    };

    this.setState((prevState) => ({ todos: [todo, ...prevState.todos] }));
  };

  deleteTodo = (todoId) => {
    this.setState((prevState) => ({
      todos: prevState.todos.filter((todo) => todo.id !== todoId),
    }));
  };

  toggleCompleted = (todoId) => {
    console.log(todoId);
    // this.setState((prevState) => ({
    //   todos: prevState.todos.map((todo) => {
    //     if (todo.id === todoId) {
    //       return {
    //         ...todo,
    //         completed: !todo.completed,
    //       };
    //     }
    //     return todo;
    //   }),
    // }));
    // or via ternarry operator

    this.setState(({ todos }) => ({
      todos: todos.map((todo) =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
      ),
    }));
  };

  changeFilter = (e) => {
    this.setState({
      filter: e.target.value,
    });
  };

  getVisibleTodos = () => {
    const { filter, todos } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return todos.filter((todo) =>
      todo.text.toLowerCase().includes(normalizedFilter)
    );
  };

  getCompletedTodoCount = () => {
    const { todos } = this.state;
    // todos.filter((todo) => todo.completed);
    return todos.reduce((acc, todo) => (todo.completed ? acc + 1 : acc), 0);
  };

  render() {
    // const { todos } = this.state;
    // const completedTodos = this.getCompletedTodoCount();
    // const totatTodosCount = todos.length;
    // const visibleTodos = this.getVisibleTodos();

    return (
      <>
        {/* <div>
          <p>Total number of todo: {totatTodosCount}</p>
          <p>Total of completed: {completedTodos}</p>
        </div>
        <TodoEditor onSubmit={this.addTodo} />

        <Filter onChange={this.changeFilter} value={this.state.filter} />

        <TodoList
          todos={visibleTodos}
          onDeleteTodo={this.deleteTodo}
          onToggleCompleted={this.toggleCompleted} */}
        {/* <LoginForm /> */}
        {/* <ProductReviewForm /> */}
      </>
    );
  }
}

export default App;

// class App extends Component {
// state = {
//   todos: initialTodos,
// };

//   // formSubmitHandler = (submitData) => {
//   //   console.log(submitData);
//   // };
// deleteTodo = (todoId) => {
//   this.setState((prevState) => ({
//     todos: prevState.todos.filter((todo) => todo.id !== todoId),
//   }));
// };

//   render() {
//     // return (
//     //   <>
//     //     <Form onSubmit={this.formSubmitHandler} />
//     //   </>
//     // );
//     // return (
//     //   <>
//     //     <ColorPicker options={colorPickerOptions} />
//     //   </>
//     // );
//     const { todos } = this.state;
//     // const completedTodos = todos.filter((todo) => todo.completed);
//     const totatTodosCount = todos.length;
//     const completedTodosCount = todos.reduce(
//       (acc, todo) => (todo.completed ? acc + 1 : acc),
//       0
//     );
//     return (
//       <>
//         <div>
//           <p>Total number of todo: {totatTodosCount}</p>
//           <p>Total of completed: {completedTodosCount}</p>
//         </div>
//         <TodoList todos={todos} onDeleteTodo={this.deleteTodo} />
//       </>
//     );
//   }
// }

// export default App;

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
