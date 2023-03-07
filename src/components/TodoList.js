import React from 'react'
import TodoItem from "./TodoItem";

function TodoList({ todos, setTodos, filteredTodos}) {
    
    return (
        <div className= "todo-container">
            <ul className="todo-list">
                {filteredTodos.map((todo) => (
                <TodoItem 
                    text = {todo.text}
                    key = {todo.id}
                    todo = {todo}
                    todos = {todos}
                    setTodos= {setTodos}
                ></TodoItem>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;