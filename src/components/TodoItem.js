import React from 'react'
import {doc, updateDoc, deleteDoc} from "firebase/firestore";
import {db} from "../firebase";



function TodoItem({text, todo}) {

    const deleteHandler = async () => {
        const todoDocRef = doc(db, "todos", todo.id)
        try {
            await deleteDoc(todoDocRef, {
            });
        } catch(err){
            alert(err);
        }
    }

    // const deleteHandler = () =>{
    //     setTodos(todos.filter(el => el.id !== todo.id))
    // };

    // const doneHandler = () =>{
    //     setTodos(todos.map(item => {
    //         if(item.data.id === todo.data.id){
    //             return{
    //                 ...item, done : !item.data.done
    //             }
    //         }
    //         return item;
    //     }))
    // };

    const doneHandler = async () => {
        const todoDocRef = doc(db, "todos", todo.id)
        try {
            await updateDoc(todoDocRef, {
                done : !todo.data.done

            });

        } catch(err){
            alert(err);
        }
    }

  return (
        <div className="todo">
            <li className = {`todo-item ${todo.data.done ? "done" : ""}`}>{text}</li>
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