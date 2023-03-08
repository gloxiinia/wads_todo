import { useState } from 'react';
import { useEffect } from 'react';
import './App.css';

import joker from './images/joker-phone.png';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import PlaySound from './components/PlaySound';
import Price from "./audio/price.mp3";
import Name from './components/Name';

function App() {

  //UseEffect and UseStates
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [currentSong, setSong] = useState(Price); 
  const [isLooped, setLoop] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  //UseEffect, after each browser refresh run once
  //Getting and checking for the localstorage in the web
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

  //Handling the filter and saving the localstorage in string form
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

  //main app content
  return (
    <div className="todo-app">
      <header>
        <h1>To-Do App</h1>
      </header>
      <PlaySound
        isPlaying = {isPlaying}
        setIsPlaying = {setIsPlaying}
        isLooped = {isLooped}
        setLoop = {setLoop}
        currentSong = {currentSong}
        setSong = {setSong}
      />
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
      <div className="joker-img">
      </div>
      <footer>
        <Name/>
      </footer>

    </div>
  );
}

export default App;
