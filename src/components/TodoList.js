import React from 'react'
import TodoItem from "./TodoItem";

function TodoList({ filteredTodos}) {
    
    return (
        <div className= "todo-container">
            <ul className="todo-list">
                {filteredTodos.map((todo) => (
                <TodoItem 
                    text = {todo.data.text}
                    key = {todo.data.id}
                    todo = {todo}
                ></TodoItem>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;