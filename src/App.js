import './App.css';
import {BrowserRouter as Router, Route, Routes, NavLink, Link } from 'react-router-dom';
import Home from './Components/Home/Home';
import UserDetails from './Components/UserDetails/UserDetails';

function App() {
  

  return (
    <Router>
        <Routes>
            <Route exact path='/' element={<Home />}></Route>
            <Route path='/home' element={<Home />}></Route>
            <Route path='/user-details/:userId' element={<UserDetails />}></Route>
        </Routes>
    </Router>
  );
}

export default App;
