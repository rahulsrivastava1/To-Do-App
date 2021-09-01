import React from "react";
import ToDo from "./ToDo";

const ToDoList = (props) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {props.filteredtodos.map((todo) => (
          <ToDo
            todos={props.todos}
            setToDos={props.setToDos}
            key={todo.id}
            text={todo.text}
            todo={todo}
          />
        ))}
      </ul>
    </div>
  );
};
export default ToDoList;
