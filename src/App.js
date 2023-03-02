import { nanoid } from "nanoid";
import { Component } from "react";
// import Counter from "./Components/Counter";
// import Dropdown from "./Components/Dropdown";
// import ColorPicker from "./Components/Colorpicker";
// import colorPickerOptions from "./Components/Colorpicker/colorPickerOptions";
import TodoEditor from "./Components/TodoEditor/TodoEditor";
import TodoList from "./Components/TodoList";
import initialTodos from "./Components/TodoList/todos.json";
// import Form from "./Components/Form";
import Filter from "./Components/Filter";
import Modal from "./Components/Modal";
// import LoginForm from "./Components/LoginForm";
// import ProductReviewForm from "./Components/ProductReviewForm";
// import Clock from "./Components/Clock";
// import IconButton from "./Components/IconButton";
// import { ReactComponent as AddIcon } from "./icons/add.svg";

class App extends Component {
  state = {
    todos: initialTodos,
    // todos: [],
    filter: "",
    showModal: false,
  };

  componentDidMount() {
    // console.log("App componentDidMount");
    const todos = localStorage.getItem("todos");
    const parsedTodos = JSON.parse(todos);

    if (parsedTodos) {
      this.setState({
        todos: parsedTodos,
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log("App componentDidUpdate");
    // порівнюємо не масиви, а їх властивості(тому, що якщо будемо порівнювати навіть
    // два ідентичних масиви - вони будуть різні, бо мають різні посилання)
    if (this.state.todos !== prevState.todos) {
      localStorage.setItem("todos", JSON.stringify(this.state.todos));
    }
  }

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
    // console.log(todoId);
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

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    // console.log("App render");
    const { todos, filter, showModal } = this.state;
    const completedTodos = this.getCompletedTodoCount();
    const totatTodosCount = todos.length;
    const visibleTodos = this.getVisibleTodos();

    return (
      // todos:
      <>
        <div>
          <p>Total number of todo: {totatTodosCount}</p>
          <p>Total of completed: {completedTodos}</p>
        </div>
        <TodoEditor onSubmit={this.addTodo} />
        <Filter onChange={this.changeFilter} value={filter} />
        <TodoList
          todos={visibleTodos}
          onDeleteTodo={this.deleteTodo}
          onToggleCompleted={this.toggleCompleted}
        />

        <button type="button" onClick={this.toggleModal}>
          Open modal
        </button>
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <h1>Hey, this is content on modal as children</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
              delectus facilis? Similique voluptatibus inventore animi hic sint
              itaque eos alias? Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Officia, delectus facilis? Similique
              voluptatibus inventore animi hic sint itaque eos alias?
            </p>
            <button type="button" onClick={this.toggleModal}>
              Close modal
            </button>
          </Modal>
        )}

        {/* <Clock /> */}
        {/* <ColorPicker options={colorPickerOptions} /> */}
      </>

      // {/* <LoginForm /> */}
      // {/* <ProductReviewForm /> */}
    );
  }
}

export default App;
