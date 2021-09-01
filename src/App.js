import React, { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/Form";
import ToDoList from "./components/ToDoList";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setToDos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredtodos, setFilteredToDos] = useState([]);

  useEffect(() => {
    getLocalTodos();
  }, []);

  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);

  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredToDos(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredToDos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredToDos(todos);
        break;
    }
  };

  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setToDos(todoLocal);
    }
  };
  return (
    <div className="App">
      <header>
        <h1>ToDo List App</h1>
      </header>
      <Form
        todos={todos}
        setToDos={setToDos}
        inputText={inputText}
        setInputText={setInputText}
        setStatus={setStatus}
      />
      <ToDoList
        todos={todos}
        setToDos={setToDos}
        filteredtodos={filteredtodos}
      />
    </div>
  );
}

export default App;
