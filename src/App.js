import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Home from './components/Home/Home';
import Login from './components/Auth/Login';
import Logout from './components/Auth/Logout';
import CreatePost from './components/CreatePost/CreatePost'
import Navbar from './components/Navbar/Navbar';

function App() {
  // ログイン状態
  const [isAuth, setIsAuth] = useState(false);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} ></Route>
        <Route path='/createpost' element={<CreatePost />} ></Route>
        <Route path='/login' element={<Login setIsAuth={setIsAuth} />} ></Route>
        <Route path='/logout' element={<Logout setIsAuth={setIsAuth} />} ></Route>
      </Routes>
    </Router>
  );
}

export default App;
