import React, { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const Form = ({ input, setInput, todos, setTodos, editTodo, setEditTodos, isDisabled, setIsDisabled }) => {
  const updateTodo = (title, id, completed) => {
    const newTodo = todos.map((todo) =>
      todo.id === id ? { title, id, completed } : todo
    );
    setTodos(newTodo);
    setEditTodos("");
  };

  useEffect(() => {
    if(editTodo){
        setInput(editTodo.title)
    }else{
        setInput("")
    }
  }, [setInput, editTodo])

  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!editTodo) {
      setTodos([...todos, { id: uuidv4(), title: input, completed: false }]);
      setInput("");
    } else {
      updateTodo(input, editTodo.id, editTodo.completed);
    }
    // setIsDisabled(true);
  };

  return (
    <form onSubmit={handleSubmit} >
      <input
        type="text"
        placeholder="Enter text here"
        className="task-input"
        value={input}
        required
        onChange={handleChange}
      />

      <button className="btn btn-secondary" type="Submit">
        { editTodo ? "edit" : "Add"}
      </button>
    </form>
  );
};

export default Form;
