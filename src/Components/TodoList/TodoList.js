import "./TodoList.css";

const TodoList = ({ todos, onDeleteTodo }) => {
  return (
    <ul className="TodoList">
      {todos.map(({ id, text, completed }) => {
        return (
          <li key={id} className="TodoList__item">
            <p className="TodoList__text">{text}</p>{" "}
            <button onClick={() => onDeleteTodo(id)}>delete</button>
          </li>
        );
      })}
    </ul>
  );
};

export default TodoList;
