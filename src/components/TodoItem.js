import React from 'react'

function TodoItem({text, todo, todos, setTodos}) {

    const deleteHandler = () =>{
        setTodos(todos.filter(el => el.id !== todo.id))
    };

    const doneHandler = () =>{
        setTodos(todos.map(item => {
            if(item.id === todo.id){
                return{
                    ...item, done : !item.done
                }
            }
            return item;
        }))
    };

  return (
        <div className="todo">
            <li className = {`todo-item ${todo.done ? "done" : ""}`}>{text}</li>
            <button onClick = {doneHandler} className="done-btn">
                <i className="fas fa-check"></i>
            </button>
            <button onClick = {deleteHandler} className = "delete-btn">
                <i className="fas fa-trash"></i>
            </button>
        </div>
  )
}

export default TodoItem;