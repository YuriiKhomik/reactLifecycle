const Todo = ({ text, completed, onToggleCompleted, onDelete }) => {
  return (
    <>
      <input
        type="checkbox"
        className="TodoList__checkbox"
        checked={completed}
        onChange={onToggleCompleted}
      ></input>
      <p className="TodoList__text">{text}</p>{" "}
      <button className="TodoList__btn" onClick={onDelete}>
        delete
      </button>
    </>
  );
};

export default Todo;
