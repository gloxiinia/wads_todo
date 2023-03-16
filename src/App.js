import {BrowserRouter as Router, Route, Routes, Navigate} from "react-router-dom";

import Login from "./components/Login";
import Register from "./components/Register";
import Reset from "./components/Reset";
import Dashboard from './components/Dashboard';
import TodoFull from './components/TodoFull';

function App() {


  //main app content
  return (
    <Router>
      <div className="todo-app">
        <Routes>
          <Route path="/" element= {<Login/>}/>
          <Route path="/home" element={<TodoFull/>}/>
          <Route path="/register" element = {<Register/>}/>
          <Route path="/reset" element = {<Reset/>}/>
          <Route path= "/dashboard" element={<Dashboard/>}/>
          <Route path='*' element={<Navigate to='/home' />} />
        </Routes>


    </div>
  </Router>
    
  );
}

export default App;
