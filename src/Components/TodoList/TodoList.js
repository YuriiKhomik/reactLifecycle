import classNames from "classnames";
import "./TodoList.css";

const TodoList = ({ todos, onDeleteTodo, onToggleCompleted }) => {
  return (
    <ul className="TodoList">
      {todos.map(({ id, text, completed }) => {
        return (
          <li
            key={id}
            className={classNames("TodoList__item", {
              "TodoList__item--completed": completed,
            })}
          >
            <input
              type="checkbox"
              className="TodoList__checkbox"
              checked={completed}
              onChange={() => onToggleCompleted(id)}
            ></input>
            <p className="TodoList__text">{text}</p>{" "}
            <button className="TodoList__btn" onClick={() => onDeleteTodo(id)}>
              delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default TodoList;

// const TodoList = ({ todos, onDeleteTodo }) => {
//   return (
//     <ul className="TodoList">
//       {todos.map(({ id, text, completed }) => {
//         return (
//           <li key={id} className="TodoList__item">
//             <p className="TodoList__text">{text}</p>{" "}
//             <button onClick={() => onDeleteTodo(id)}>delete</button>
//           </li>
//         );
//       })}
//     </ul>
//   );
// };
