import { useState } from 'react';
import { useEffect } from 'react';
import './App.css';

// import myImage from './images/joker-phone.png';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {

  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() =>{
    const getLocalTodos = () => {
      if(localStorage.getItem("todos") === null){
        localStorage.setItem("todos", JSON.stringify([]));
      } else {
        let localTodos = JSON.parse(localStorage.getItem("todos"));
        setTodos(localTodos);
      }
    };

    getLocalTodos();
  }, []);

  useEffect(() => {
    const filterHandler = () => {
      switch(status){
        case 'done':
          setFilteredTodos(todos.filter(todo => todo.done === true))
          break;
  
        case 'uncompleted':
          setFilteredTodos(todos.filter(todo => todo.done === false))
          break;
  
        default:
          setFilteredTodos(todos);
          break;
      }
    };

    const saveLocalTodos = () => {
      localStorage.setItem("todos", JSON.stringify(todos));
    };

    filterHandler();
    saveLocalTodos();

  }, [todos,status]);







  return (
    <div className="todo-app">
      <header>
        <h1>To-Do App</h1>
      </header>
      <TodoForm 
        todos = {todos} 
        setTodos = {setTodos} 
        inputText = {inputText}
        setInputText = {setInputText}
        setStatus = {setStatus}
      ></TodoForm>
      <TodoList 
        setTodos = {setTodos}
        todos={todos}
        filteredTodos = {filteredTodos}
      ></TodoList>
      {/* <img src={myImage}></img> */}
    </div>
  );
}

export default App;
