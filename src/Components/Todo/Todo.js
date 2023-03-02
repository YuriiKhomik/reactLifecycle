// import { ReactComponent as DeleteIcon } from "../../icons/delete.svg";
// import IconButton from "../IconButton";

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
      {/* <IconButton onClick={onDelete}>
        <DeleteIcon width="32px" height="32px" fill="black" />
      </IconButton> */}
    </>
  );
};

export default Todo;
