import {BrowserRouter as Router, Route, Routes, Navigate} from "react-router-dom";

import Login from "./components/Login";
import Register from "./components/Register";
import Reset from "./components/Reset";
import Dashboard from './components/Dashboard';
import TodoFull from './components/TodoFull';
import NotFound from "./components/NotFound";

function App() {


  //main app content
  return (
    <Router>
      <div className="todo-app">
        <Routes>
          <Route path="/" element= {<Navigate to="/login" />}/>
          <Route path="/login" element= {<Login/>}/>
          <Route path="/home" element={<TodoFull/>}/>
          <Route path="/register" element = {<Register/>}/>
          <Route path="/resetPassword" element = {<Reset/>}/>
          <Route path= "/dashboard" element={<Dashboard/>}/>
          <Route path='*' element={<NotFound/>} />
        </Routes>


    </div>
  </Router>
    
  );
}

export default App;
