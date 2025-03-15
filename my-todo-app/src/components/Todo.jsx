import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

const Todo = ({ todo, index, deleteTodo, editTodo }) => {
  // Get the current time
  const currentTime = new Date();
  const currentHours = currentTime.getHours();
  const currentMinutes = currentTime.getMinutes();
  const currentTimeString = `${String(currentHours).padStart(2, "0")}:${String(currentMinutes).padStart(2, "0")}`;

  // Parse the task time
  const taskTime = todo.time;

  // Determine if the task is upcoming or past
  const isUpcoming = taskTime > currentTimeString;

  // Apply conditional class
  const taskClass = isUpcoming ? "upcoming-task" : "past-task";

  return (
    <div className={`todo-item-box ${taskClass}`}>
      <div className="todo-item">
        <span className="task-number">{index + 1}.</span>
        <span className="task-text">{todo.text}</span>
        {todo.time && <span className="task-time">{todo.time}</span>}

        <button className="edit-btn" onClick={() => editTodo(index)}>
          <FontAwesomeIcon icon={faEdit} />
        </button>

        <button className="delete-btn" onClick={() => deleteTodo(index)}>
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
    </div>
  );
};

export default Todo;
