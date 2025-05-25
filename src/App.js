import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Home from './components/Home/Home';
import Login from './components/Auth/Login';
import Logout from './components/Auth/Logout';
import CreatePost from './components/CreatePost/CreatePost'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} ></Route>
        <Route path='/createpost' element={<CreatePost />} ></Route>
        <Route path='/login' element={<Login />} ></Route>
        <Route path='/logout' element={<Logout />} ></Route>
      </Routes>
    </Router>
  );
}

export default App;
