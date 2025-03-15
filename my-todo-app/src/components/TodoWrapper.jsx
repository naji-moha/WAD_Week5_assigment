import React, { useState, useEffect } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";

const TodoWrapper = () => {
  const [todos, setTodos] = useState(() => {
    // Load stored todos from localStorage
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  // Save todos to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (todo) => {
    const newTodos = [...todos, { ...todo, completed: false }];
    setTodos(newTodos);
  };

  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  const editTodo = (index) => {
    const newText = prompt("Edit your task:", todos[index].text);
    if (newText !== null) {
      const updatedTodos = [...todos];
      updatedTodos[index].text = newText;
      setTodos(updatedTodos);
    }
  };

  // Sort todos by time
  const sortedTodos = [...todos].sort((a, b) => {
    if (a.time && b.time) {
      return a.time.localeCompare(b.time);
    }
    return 0;
  });

  return (
    <div className="todo-wrapper">
      <h1 className="todo-title">My Todo List!</h1>
      <div className="todo-input-container">
        <TodoForm addTodo={addTodo} />
      </div>

      <div className="tasks-container">
        {sortedTodos.length === 0 ? (
          <p className="no-tasks">No tasks added yet.</p>
        ) : (
          sortedTodos.map((todo, index) => (
            <Todo
              key={index}
              index={index}
              todo={todo}
              deleteTodo={deleteTodo}
              editTodo={editTodo}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default TodoWrapper;
