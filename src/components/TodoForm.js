import React from 'react';
import {db} from "../firebase";
import {collection, addDoc, Timestamp} from "firebase/firestore";

function TodoForm({inputText, setInputText, setStatus}) {

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await addDoc(collection(db, "todos"), {
                text: inputText,
                done: false,
                created: Timestamp.now()
            });
            setInputText("");
        } catch(err){
            alert(err);
        }
    }
    const inputHandler = (e) => {
        console.log(e.target.value);
        setInputText(e.target.value);
    };

    // const submitTodoHandler = (e) =>{
    //     e.preventDefault();
    //     setTodos([
    //         ...todos, 
    //         {text: inputText, done: false, id: Math.floor(Math.random() * 10000)}
    //     ]);
    //     setInputText("");

    // };

    const statusHandler = (e) =>{
        setStatus(e.target.value)
    }
  return (
    <form>
        <input 
            value={inputText}
            onChange={inputHandler}
            type="text" 
            className = "todo-input"
            placeholder='Add a new to-do...'
        />
        <button onClick={handleSubmit} className = "todo-button" type ="submit">
            <i className = "fas fa-plus-square"></i>
        </button>
        <div className="select">
            <select onChange = {statusHandler} name="todos" className="filter-todo">
                <option value="all">ALL</option>
                <option value="done">DONE</option>
                <option value="uncompleted">UNCOMPLETED</option>
            </select>
        </div>
    </form>
  )
}

export default TodoForm;