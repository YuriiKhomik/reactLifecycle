import "./TodoList.css";

const TodoList = ({ todos }) => {
  return (
    <ul className="TodoList">
      {todos.map(({ id, text, completed }) => {
        return (
          <li key={id} className="TodoList__item">
            <p className="TodoList__text">{text}</p> <button>delete</button>
          </li>
        );
      })}
    </ul>
  );
};

export default TodoList;
