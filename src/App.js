import React, { useState } from "react";
import Header from "./components/Header";
import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [editTodo, setEditTodos] = useState(null);
  const [isDisabled, setIsDisabled] = useState(false);

  return (
    <div className="container">
      <div className="app-wrapper">
        <div className="head">
          <Header />
        </div>
        <div>
          <Form
            input={input}
            setInput={setInput}
            todos={todos}
            setTodos={setTodos}
            editTodo={editTodo}
            setEditTodos={setEditTodos}
          />
        </div>
        <div>
          <TodoList
            todos={todos}
            setTodos={setTodos}
            setEditTodos={setEditTodos}
            isDisabled={isDisabled}
            setIsDisabled={setIsDisabled}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
