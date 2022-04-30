import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import './App.css';
import Profile from './components/Profile';
import Login from './components/Login';
import SignIn from './components/SignIn';

function App() {

  return (
    <SignIn />

    /*
    <Router>
    <div className="App">
      <Navbar />
      <div className="content">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/profile" element={<Profile />} /> 
          <Route exact path="/login" element={<Login />} />
          <Route path="/SignIn" element={<SignIn />} />
          
          
        </Routes>
      </div>
    </div>
    </Router>*/
  );
} 
 //<Route path="/SignIn" element={<SignIn />} />
export default App;
