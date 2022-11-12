import React from "react";

const TodoList = ({ todos, setTodos, setEditTodos, isDisabled, setIsDisabled }) => {
  const handleDelete = ({ id }) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleComplete = (todo) => {
    setTodos(todos.map((item) => {
         if ( item.id === todo.id ){
            return { ...item, completed : true }
         }
         return item;
    }))
        // setIsDisabled(false)
  }

  const handleEdit = ({id}) => {
     const editTodo = todos.find((todo) => todo.id === id);
     setEditTodos(editTodo)
     console.log(editTodo);
    //  setIsDisabled(true);
  }

  return (

    <div className="items">
      {todos.map((todo) => {
        return (
          
          <li className="list-item" key={todo.id}>
            <input
              type="text"
              value={todo.title}
              className={`list ${todo.completed ? "complete" : ""}`}
              onChange={(e) => e.preventDefault()}
            />
          
           <button className="button-complete task-button"  
            // disabled={false }
             onClick={()=>handleComplete(todo)}>
              <i className="fa fa-check-circle"></i>
            </button>
            
            <button className="button-edit task-button"
              // disabled={true}
             onClick={()=>handleEdit(todo)}>
              <i className="fa fa-edit"></i>
            </button>
              
            <button
              className="button-delete task-button"
              onClick={() => handleDelete(todo)}
            >
              <i className="fa fa-trash"></i>
            </button>
           
          </li>
        );
      })}
    </div>
  );
};
export default TodoList;
