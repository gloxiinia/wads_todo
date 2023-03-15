import { useState } from 'react';
import { useEffect } from 'react';
import { db } from './firebase';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {collection, query, orderBy, onSnapshot, QuerySnapshot} from "firebase/firestore";
import './styles/App.css';

import JokerPhone from './images/joker-phone.png';
import JokerSit from './images/joker-sit.png';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import PlaySound from './components/PlaySound';
import Price from "./audio/price.mp3";
import Name from './components/Name';
import Login from "./components/Login";
import Register from "./components/Register";
import Reset from "./components/Reset";
import Dashboard from './components/Dashboard';

function App() {

  //UseEffect and UseStates
  const [openAddModal, setOpenAddModal] = useState(false)
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [currentSong, setSong] = useState(Price); 
  const [isLooped, setLoop] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  //UseEffect, after each browser refresh run once
  //Getting and checking for the data in the firebase firestore
  useEffect(() =>{
    const q = query(collection(db, "todos"), orderBy("created", "desc"));
    onSnapshot(q, (querySnapshot)=>{
      setTodos(querySnapshot.docs.map(todo => ({
        id: todo.id,
        data: todo.data()
      })))
    })
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

    filterHandler();

  }, [todos,status]);

  //main app content
  return (
    <Router>
      <div className="todo-app">
        <Routes>
          <Route path="/" element= {<Login/>}/>
          <Route path="/register" element = {<Register/>}/>
          <Route path="/reset" element = {<Reset/>}/>
          <Route path= "dashboard" element={<Dashboard/>}/>
        </Routes>
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
        inputText = {inputText}
        setInputText = {setInputText}
        setStatus = {setStatus}
      ></TodoForm>
      <TodoList 
        setTodos = {setTodos}
        todos={todos}
        filteredTodos = {filteredTodos}
      ></TodoList>
      <picture>
        <source className="joker-img" srcset={JokerSit} media="(max-width: 35em)"/>
        < source className="joker-img" srcset={JokerPhone}/>
        < img className="joker-img" alt ="Joker Persona 5" src={JokerPhone}/>
      </picture>

      <footer>
        <Name/>
      </footer>

    </div>
  </Router>
    
  );
}

export default App;
